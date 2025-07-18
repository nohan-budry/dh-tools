import type {LayoutLoad} from "./$types";
import type Community from "$lib/models/Community";

import rawCommunities from "$lib/data/communities.json";


export const load: LayoutLoad = () => {
    let communities: Community[] = rawCommunities;
    return {communities};
}