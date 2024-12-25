import { ID } from "react-native-appwrite";
import { databases, config } from "./appwrite";
import { agentImages, galleryImages, shoeImages, reviewImages } from "./data";

const COLLECTIONS = {
  AGENT: config.agentsCollectionId,
  REVIEWS: config.reviewsCollectionId,
  GALLERY: config.galleriesCollectionId,
  SHOES: config.shoesCollectionId,
};

const brands = [
  "Nike",
  "Jordan",
  "Samba",
  "Reebok",
  "Adidas",
  "Converse",
  "Vans",
  "Other",
];

const sizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"];
const colors = [
  "#fff",
  "#000",
  "#036145",
  "#0061ff",
  "#fdc8c8ff",
  "#f1f1f1",
  "#FFC700",
  "Other",
];

function getRandomSubset<T>(
  array: T[],
  minItems: number,
  maxItems: number
): T[] {
  if (minItems > maxItems) {
    throw new Error("minItems cannot be greater than maxItems");
  }
  if (minItems < 0 || maxItems > array.length) {
    throw new Error(
      "minItems or maxItems are out of valid range for the array"
    );
  }

  // Generate a random size for the subset within the range [minItems, maxItems]
  const subsetSize =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;

  // Create a copy of the array to avoid modifying the original
  const arrayCopy = [...array];

  // Shuffle the array copy using Fisher-Yates algorithm
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[i],
    ];
  }

  // Return the first `subsetSize` elements of the shuffled array
  return arrayCopy.slice(0, subsetSize);
}

async function seed() {
  try {
    // Clear existing data from all collections
    for (const key in COLLECTIONS) {
      const collectionId = COLLECTIONS[key as keyof typeof COLLECTIONS];
      const documents = await databases.listDocuments(
        config.databseId!,
        collectionId!
      );
      for (const doc of documents.documents) {
        await databases.deleteDocument(
          config.databseId!,
          collectionId!,
          doc.$id
        );
      }
    }

    console.log("Cleared all existing data.");

    // Seed Agents
    const agents = [];
    for (let i = 1; i <= 5; i++) {
      const agent = await databases.createDocument(
        config.databseId!,
        COLLECTIONS.AGENT!,
        ID.unique(),
        {
          name: `Agent ${i}`,
          email: `agent${i}@example.com`,
          avatar: agentImages[Math.floor(Math.random() * agentImages.length)],
        }
      );
      agents.push(agent);
    }
    console.log(`Seeded ${agents.length} agents.`);

    // Seed Reviews
    const reviews = [];
    for (let i = 1; i <= 20; i++) {
      const review = await databases.createDocument(
        config.databseId!,
        COLLECTIONS.REVIEWS!,
        ID.unique(),
        {
          name: `Reviewer ${i}`,
          avatar: reviewImages[Math.floor(Math.random() * reviewImages.length)],
          review: `This is a review by Reviewer ${i}.`,
          rating: Math.floor(Math.random() * 5) + 1, // Rating between 1 and 5
        }
      );
      reviews.push(review);
    }
    console.log(`Seeded ${reviews.length} reviews.`);

    // Seed Galleries
    const galleries = [];
    for (const image of galleryImages) {
      const gallery = await databases.createDocument(
        config.databseId!,
        COLLECTIONS.GALLERY!,
        ID.unique(),
        { image }
      );
      galleries.push(gallery);
    }

    console.log(`Seeded ${galleries.length} galleries.`);

    // Seed Properties
    for (let i = 1; i <= 20; i++) {
      const assignedAgent = agents[Math.floor(Math.random() * agents.length)];

      const assignedReviews = getRandomSubset(reviews, 5, 7); // 5 to 7 reviews
      const assignedGalleries = getRandomSubset(galleries, 3, 8); // 3 to 8 galleries
      const validColors = colors.filter((color) => color !== "Other");

      const availableColors = colors
        .filter((color) => validColors.includes(color))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const availableSizes = sizes.sort(() => 0.5 - Math.random()).slice(0, 5);

      const image =
        shoeImages.length - 1 >= i
          ? shoeImages[i]
          : shoeImages[Math.floor(Math.random() * shoeImages.length)];

      const property = await databases.createDocument(
        config.databseId!,
        COLLECTIONS.SHOES!,
        ID.unique(),
        {
          name: `Property ${i}`,
          brand: brands[Math.floor(Math.random() * brands.length)],
          description: `This is the description for Property ${i}.`,
          price: Math.floor(Math.random() * 9000) + 1000,
          rating: Math.floor(Math.random() * 5) + 1,
          pairs: Math.floor(Math.random() * 10) + 1,
          colors: availableColors,
          sizes: availableSizes,
          image: image,
          agent: assignedAgent.$id,
          reviews: assignedReviews.map((review) => review.$id),
          gallery: assignedGalleries.map((gallery) => gallery.$id),
        }
      );

      console.log(`Seeded shoe: ${property.name}`);
    }

    console.log("Data seeding completed.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

export default seed;
