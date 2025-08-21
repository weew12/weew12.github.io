import {useLocalStorage} from "@vueuse/core";
import {computed, ref, toValue, watch} from "vue";

//#region src/client/features/composables/repo.ts
/**
 * 由于 github repo api 请求频率过高，vercel 免费额度有限，因此使用本地缓存。
 * 默认缓存 6 小时 时间
 */
const storage = useLocalStorage("__VUEPRESS_GITHUB_REPO__", {});

function useGithubRepo(repo, provider) {
  const repoRef = computed(() => {
    const info = toValue(repo);
    const [owner = "", name = ""] = info.split("/");
    return {
      owner,
      name
    };
  });
  const providerRef = computed(() => toValue(provider) ?? "github");
  const data = ref(null);
  const loaded = ref(false);

  async function fetchData() {
    const {owner, name} = toValue(repoRef);
    if (__VUEPRESS_SSR__ || !owner || !name) return;
    const key = `${providerRef.value === "github" ? "" : `${providerRef.value}:`}${owner}/${name}`;
    const cached = storage.value[key];
    if (cached?.info?.name && Date.now() - cached.updatedAt <= 864e5) {
      data.value = cached.info;
      loaded.value = true;
      return;
    }
    loaded.value = false;
    try {
      const res = await fetch(`https://api.pengzhanbo.cn/${providerRef.value}/repo/${owner}/${name}`).then((res$1) => res$1.json());
      loaded.value = true;
      res.convertStars = convertThousand(res.stars);
      res.convertForks = convertThousand(res.forks);
      data.value = res;
      storage.value[key] = {
        info: res,
        updatedAt: Date.now()
      };
    } catch (e) {
      loaded.value = true;
      console.error("github repo error:", e);
    }
  }

  if (!__VUEPRESS_SSR__) watch(repoRef, fetchData, {immediate: true});
  return {
    data,
    loaded
  };
}

function convertThousand(num) {
  if (num < 1e3) return num;
  return `${(num / 1e3).toFixed(1)}k`;
}

//#endregion
export {useGithubRepo};
