import {
  Account,
  Avatars,
  Client,
  Databases,
  OAuthProvider,
  Query,
} from "react-native-appwrite";
import * as Linking from "expo-linking";
import { dismissAuthSession, openAuthSessionAsync } from "expo-web-browser";
import { shoes } from "@/constants/data";

export const config = {
  platform: "com.sylusabel.kicks",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  galleriesCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
  reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
  agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
  shoesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_SHOES_COLLECTION_ID,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform);

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);

export async function login() {
  try {
    const redirectUri = Linking.createURL("/");
    let response;
    try {
      response = await account.createOAuth2Token(
        OAuthProvider.Google,
        redirectUri
      );
    } catch (error) {
      console.error(error);
      return false;
    }
    console.log(response);
    if (!response) {
      throw new Error("Create OAuth2 token failed");
    }

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );
    if (browserResult.type !== "success")
      throw new Error("Create OAuth2 token failed");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId) throw new Error("Create OAuth2 token failed");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create session");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getUser() {
  try {
    const response = await account.get();
    if (response.$id) {
      const userAvatar = avatar.getInitials(response.name);
      return { ...response, avatar: userAvatar.toString() };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getLatestShoes() {
  try {
    const result = await databases.listDocuments(
      config.databseId!,
      config.shoesCollectionId!,
      [Query.orderAsc("$createdAt"), Query.limit(5)]
    );
    return result.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getShoes({
  filter,
  query,
  limit,
}: {
  filter: string;
  query: string;
  limit?: number;
}) {
  try {
    const buildQuery = [Query.orderDesc("$createdAt")];
    if (filter && filter !== "All") {
      buildQuery.push(Query.equal("type", filter));
    }

    if (query) {
      buildQuery.push(
        Query.or([Query.search("name", query), Query.search("brand", query)])
      );
    }
    if (limit) {
      buildQuery.push(Query.limit(limit));
    }
    const result = await databases.listDocuments(
      config.databseId!,
      config.shoesCollectionId!,
      buildQuery
    );
    return result.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}
