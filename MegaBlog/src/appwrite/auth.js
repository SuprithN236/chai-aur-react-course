import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// you are creating a class here, you will have all the methods for authentication inside this.
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async signup({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("appwrite service :: signup :: error", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("appwrite service :: login :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite service :: logout :: error", error);
    }
  }
}

// we need an object to use the methods of the class. so we are creating and exporting one here only so we can directly use the methods associated with it.
const authService = new AuthService();

export default authService;
