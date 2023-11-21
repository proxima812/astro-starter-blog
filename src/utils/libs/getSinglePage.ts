import { getCollection } from "astro:content";

// Функция для получения страниц, исключая черновики и страницы с определенными ID, также и по времени добавления публикации поста
export const getSinglePage = async (collection: any) => {
  const allPage = await getCollection(collection);
  const sortingRemoveIndex = allPage
    .sort(
      (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    )
    .filter((data: any) => data.id.match(/^(?!-)/));
  const removeDrafts = sortingRemoveIndex.filter(
    (data: any) => !data.data.draft,
  );
  return removeDrafts;
};
