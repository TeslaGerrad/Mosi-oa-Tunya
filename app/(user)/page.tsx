import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";
// import PreviewBlogList from "../../components/PreviewBlogList";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";

import { SpeakerWaveIcon } from "@heroicons/react/24/solid";


const query = groq`*[_type=='post'] {
   ...,
   author->,
   categories[]->
 } | order(_createdAt desc)
`;

export default async function IndexPage() {

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}