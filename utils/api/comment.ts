import { AxiosInstance } from 'axios';
import { OutputData } from '@editorjs/editorjs';
import { CommentItem, PostItem } from './types';

type CreateCommentDto = {
  postId: number;
  text: string;
};

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll(postId: number) {
    const { data } = await instance.get<CommentItem[]>('/comments', { params: { postId } });
    return data;
  },
  async create(dto: CreateCommentDto) {
    const { data } = await instance.post<CreateCommentDto, { data: CommentItem }>('/comments', dto);
    return data;
  },
  async remove(id: number) {
    return instance.delete('/comments/' + id);
  },
});
