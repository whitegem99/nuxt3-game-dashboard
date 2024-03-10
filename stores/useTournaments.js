import { defineStore } from "pinia";

export const useTournaments = defineStore("tournaments", () => {
  const { getItems, getItemById } = useDirectusItems();
  const loading = useState("loadingDoc", () => false);
  const total = useState("tournament_total", () => 5);
  const items = useState("tournament_items", () => []);
  const item = useState("tournament_item", () => ({}));
  const item_temp = useState("tournament_item_temp", () => ({
    id: 1,
    title: "Tournament Title",
    description:
      "Subtitle/Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ....",
    views: 1234567,
    image: "/img/hearth.png",
    rounds: [
      {
        id: 1,
        name: "Round 1",
        time: "00:00",
        matches: [
          {
            id: "m-11",
            name: "Match 11",
            time: "00:00",
            url: "",
            ready_to_play: true,
          },
          {
            id: "m-12",
            name: "Match 12",
            time: "00:00",
            url: "",
          },
          {
            id: "m-13",
            name: "Match 13",
            time: "00:00",
            url: "",
          },
          {
            id: "m-14",
            name: "Match 14",
            time: "00:00",
            url: "",
            ready_to_play: true,
          },
        ],
      },
      {
        id: 2,
        name: "Round 2",
        time: "00:00",
        matches: [
          {
            id: "m-21",
            name: "Match 21",
            time: "00:00",
            url: "",
            ready_to_play: true,
          },
          {
            id: "m-22",
            name: "Match 22",
            time: "00:00",
            url: "",
          },
        ],
      },
      {
        id: 3,
        name: "Round 3",
        time: "00:00",
        matches: [
          {
            id: "m-31",
            name: "Match 31",
            time: "00:00",
            url: "",
          },
        ],
      },
      {
        id: 4,
        name: "Finals",
        time: "00:00",
        matches: [
          {
            id: "m-31",
            name: "Match 41",
            time: "00:00",
            url: "",
          },
        ],
      },
    ],
  }));

  // get Templates
  const getTournaments = async () => {
    const { data, error } = await useAsyncData("getItems", () =>
      getItems({
        collection: "tournament",
      })
    );
    loading.value = true;
    items.value = data || [];

    return data;
  };
  // get Template By Id
  const getTournamentById = async (id) => {
    const [detail, rounds] = await Promise.all([
      useAsyncData("getTournamentById", () =>
        getItemById({
          collection: "tournament",
          id,
        })
      ),
      useAsyncData("getTournamentItems", () =>
        getItems({
          collection: "tournament_item",
          params: {
            filter: {
              tournament: id,
            },
          },
        })
      ),
    ]);
    const objRound = ArrToObjGroupByKey(rounds.data.value, "rank");
    const rounds_items = [];
    const ranks = Object.keys(objRound);
    const last_index = ranks.length - 1;
    ranks.forEach((id, idx) => {
      rounds_items.push({
        id,
        name: last_index == idx ? "Finals" : "Round " + (idx + 1),
        time: "00:00",
        matches: objRound[id],
      });
    });
    detail.data.value.rounds = rounds_items;
    const res = detail.data;
    loading.value = true;
    item.value = res;
    return res;
  };
  return {
    loading,
    items,
    total,
    item,
    item_temp,
    getTournaments,
    getTournamentById,
  };
});
