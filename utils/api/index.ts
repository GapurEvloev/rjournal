import axios from "axios";
import { CreateUserDto, LoginDto, ResponseUser } from "./types";

const instance = axios.create({
  baseURL: "http://localhost:3200",
  headers: {
    //
  },
});

export const Api = {
  async getAll() {
    const { data } = await instance.get<ResponseUser[]>("/users");
    return data;
  },

  async register(dto: CreateUserDto): Promise<ResponseUser> {
    const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
      "/auth/register",
      dto
    );
    return data;
  },

  async login(dto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: ResponseUser }>(
      "/auth/login",
      dto
    );
    return data;
  },

  async getMe() {
    const { data } = await instance.get<ResponseUser>("/users/me");
    return data;
  },
};
