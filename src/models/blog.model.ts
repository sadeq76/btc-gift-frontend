export default interface BlogModel {
  id: number;
  cover: string;
  title: string;
  description: string;
  content: string;
  creation_date: string;
  likes: number;
  views: number;
  related_blogs: [
    {
      id: number;
      cover: string;
      title: string;
      description: string;
      creation_date: string;
      likes: number;
      views: number;
    },
    {
      id: number;
      cover: string;
      title: string;
      description: string;
      creation_date: string;
      likes: number;
      views: number;
    },
    {
      id: number;
      cover: string;
      title: string;
      description: string;
      creation_date: string;
      likes: number;
      views: number;
    }
  ];
  next_prev: {
    prev?: { title: string; id: number };
    next?: { title: string; id: number };
  };
  video?: string;
}
