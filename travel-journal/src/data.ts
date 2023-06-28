/* generate dates */
function getDateXDaysAgo({
  numOfDays,
  date = new Date(),
}: {
  numOfDays: number;
  date?: Date;
}): Date {
  const daysAgo = new Date(date.getTime());
  daysAgo.setDate(date.getDate() - numOfDays);
  return daysAgo;
}

const date = new Date();

export const data = [
  {
    alt: "Sint Maarten",
    country: "Netherlands",
    date: getDateXDaysAgo({ numOfDays: 1, date }).toDateString(),
    description:
      "Part of the Kingdom of the Netherlands located on the southern part of a Caribbean island shared with Saint Martin. Its natural features span lagoons, beaches and salt pans. The port is a popular cruise-ship stop.",
    imgSrc:
      "https://images.unsplash.com/photo-1551963837-2a42d66d39d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80",
    location: "Sint Maarten",
    locationUrl: "https://goo.gl/maps/1REoZswptPY2Aawd6",
  },
  {
    alt: "Mardi Gras",
    country: "USA",
    date: "Fat Tuesday 2022",
    description:
      "The Carnival celebration begins on or after the Christian feasts of the Epiphany (Three Kings Day) and culminating on the day known as Fat Tuesday, the practice of the night of eating rich, fatty foods before the ritual Lenten sacrifices and fasting of the Lenten season.",
    imgSrc:
      "https://images.unsplash.com/photo-1518630774896-4a27c374a744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    location: "Mardi Gras",
    locationUrl: "https://goo.gl/maps/xhveGXMspT1erfDj8",
  },
  {
    alt: "japan",
    country: "japan",
    date: getDateXDaysAgo({ numOfDays: 31, date }).toDateString(),
    description:
      "Located on the island of Honshū, is the highest mountain in Japan. It is the second-highest volcano located on an island in Asia, and seventh-highest peak of an island on Earth. Mount Fuji is an active volcano that last erupted from 1707 to 1708. The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from there on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan.",
    imgSrc:
      "https://images.unsplash.com/photo-1565618754154-c8011e5df2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    location: "Mount Fuji",
    locationUrl: "https://goo.gl/maps/aWWDWhY1vop3RQ148",
  },
  {
    alt: "Dimmuborgir",
    country: "Iceland",
    date: getDateXDaysAgo({ numOfDays: 100, date }).toDateString(),
    description:
      "Dimmuborgir is a large area of unusually shaped lava fields east of Mývatn in Iceland. The area is composed of various volcanic caves and rock formations, reminiscent of an ancient collapsed citadel. The dramatic structures are one of Iceland's most popular natural tourist attractions.",
    imgSrc:
      "https://images.unsplash.com/photo-1533491175253-e43a7363e0fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    location: "Dimmuborgir",
    locationUrl: "https://goo.gl/maps/4dKxq8qittCVHypN6",
  },
] as const;
