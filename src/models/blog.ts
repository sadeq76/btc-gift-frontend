import Comment from "@/models/comment";

export default interface Blog {
  id: number;
  comments: Comment[];
  liked: false;
  next_blog: {
    id: number;
    title: string;
    time_to_read: number;
    cover: string;
  };
  prev_blog: {
    id: number;
    title: string;
    time_to_read: number;
    cover: string;
  };
  title: string;
  summary: string;
  content: string;
  time_to_read: number;
  cover: string;
  like_count: number;
  view_count: number;
  comment_count: number;
  date_updated: string;
  date_created: string;
}
