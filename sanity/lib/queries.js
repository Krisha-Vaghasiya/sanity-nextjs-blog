export const postsQuery = `
*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body
}`;