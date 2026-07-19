// @ts-check
import { defineConfig } from "astro/config";

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

const isUserPage =
    owner !== undefined &&
    repository !== undefined &&
    repository === `${owner}.github.io`;

export default defineConfig({
    site: owner ? `https://${owner}.github.io` : "http://localhost:4321",
    base: owner && repository && !isUserPage ? `/${repository}` : "/",
    trailingSlash: "always",
});
