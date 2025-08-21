import {MaybeRef, Ref} from "vue";

//#region src/client/features/composables/repo.d.ts
interface RepoLicense {
    name: string;
    url: string;
}

interface RepoInfo {
    name: string;
    fullName: string;
    description: string;
    url: string;
    stars: number;
    forks: number;
    convertStars: number | string;
    convertForks: number | string;
    watchers: number;
    language: string;
    languageColor: string;
    archived: boolean;
    visibility: "Private" | "Public";
    template: boolean;
    ownerType: "User" | "Organization";
    license: RepoLicense | null;
}

interface UseGithubRepoResult {
    data: Ref<RepoInfo | null>;
    loaded: Ref<boolean>;
}

declare function useGithubRepo(repo: MaybeRef<string>, provider: MaybeRef<"github" | "gitee" | undefined>): UseGithubRepoResult;

//#endregion
export {RepoInfo, useGithubRepo};
