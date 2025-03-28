import { IPost } from "@/interfaces/post.model";
import { IStoryLine } from "@/interfaces/storyLine.model";
import { IUser } from "@/interfaces/user.model";

import { IConversation, IMessage } from "@/interfaces/message.model";
import { IToken } from "@/interfaces/token.model";

export const storyLineTestData: IStoryLine[] = [
  {
    id: 1,
    userId: "1",
    userName: "My Story",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/738e/b596/db2e9182ab809806015b8b2a724f9a22?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CrcVBBBPjUFm~kTP9-r2saiuhhb~KQr4zGYy7cwTQjVfip~WkZ5i7oNMkbczobH-pb~9K5r6eIVprH12zEE6B0-yG9z0bMNPAVlZFciHGyi03B~UkLmLWiiu~kvH5iEOWcGkeI24n-dsKr9amLSWQIj7e9IMrbE-ZPLpvea09LMNRD0cIhbmcJSoLt7Tf2m4ZRdW2J~7E5sTHFpnADBnYDExP-Ik867KDNHPIMzhS~yb92C9Gd1EFZKLcXIcmbkRbt0t9ms2nwdx03iI77~ZmKBTPrYrplJbpaLaKmTRV0LlbIYxgv~-Qwom~zix-TXDgO3cQa06aeFENoil4iystg__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/738e/b596/db2e9182ab809806015b8b2a724f9a22?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CrcVBBBPjUFm~kTP9-r2saiuhhb~KQr4zGYy7cwTQjVfip~WkZ5i7oNMkbczobH-pb~9K5r6eIVprH12zEE6B0-yG9z0bMNPAVlZFciHGyi03B~UkLmLWiiu~kvH5iEOWcGkeI24n-dsKr9amLSWQIj7e9IMrbE-ZPLpvea09LMNRD0cIhbmcJSoLt7Tf2m4ZRdW2J~7E5sTHFpnADBnYDExP-Ik867KDNHPIMzhS~yb92C9Gd1EFZKLcXIcmbkRbt0t9ms2nwdx03iI77~ZmKBTPrYrplJbpaLaKmTRV0LlbIYxgv~-Qwom~zix-TXDgO3cQa06aeFENoil4iystg__",
      },
    ],
  },
  {
    id: 2,
    userId: "2",
    userName: "Selena",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/7905/b70b/9309994802ad82f715678dba7b3f15af?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GwkUez0aUYFoQyIqVD~Q3ZhhXTUuY0P-Q-MelotFPtUasCbwO-pRLrhNPZ~oIAT2QpaQQkyHNal2MHpS9ejcs~SRBegQ-dzXBSocvyUkqjmNLiKYk8zsZ7VhXvCf9EuokEvkQSakElyHr70rLHqMF~rdcutokHlwgHu0lFMZvQD5Rlx7lD1GmWdSlS7whgwuA1k0caAF2A-EqFERkZphK-fm~eaESV60mmwLMR7Ryl3cVB7Z-FfQlWUGVZEQExmjmPJQzmFHI5eDIGmAwj6F3xRd2G84wD5B2ACB1FGzXmIqrhh1n33S9Ovmg~Xt17vhRBIVXsiTrWwj-sOabS08-Q__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/7905/b70b/9309994802ad82f715678dba7b3f15af?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GwkUez0aUYFoQyIqVD~Q3ZhhXTUuY0P-Q-MelotFPtUasCbwO-pRLrhNPZ~oIAT2QpaQQkyHNal2MHpS9ejcs~SRBegQ-dzXBSocvyUkqjmNLiKYk8zsZ7VhXvCf9EuokEvkQSakElyHr70rLHqMF~rdcutokHlwgHu0lFMZvQD5Rlx7lD1GmWdSlS7whgwuA1k0caAF2A-EqFERkZphK-fm~eaESV60mmwLMR7Ryl3cVB7Z-FfQlWUGVZEQExmjmPJQzmFHI5eDIGmAwj6F3xRd2G84wD5B2ACB1FGzXmIqrhh1n33S9Ovmg~Xt17vhRBIVXsiTrWwj-sOabS08-Q__",
      },
    ],
  },
  {
    id: 3,
    userId: "3",
    userName: "Simon",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/0130/d345/6ebd49db57fd88c39f7795f97c76b681?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fLHQnTLN~vvPxK0WhW4T6xHbh0IefllV9~Pk82nF~EP0LxKZ8a1uCGgXqrH6cwmycxNmhTJtk2ZCJs~4Fn7m9KtdWqSqMx0eh6QP75N-L0PIhGFfJ7KYDY0uSp5S0ZF-WP7Vz5p6Ae9KKryV4HjVRw5-abJx-avYlrNwTxlZuT~D1pQSwmqZNPEQDnTlNxxEovYS688gSuO~B~7uBX78c87UWgBa5tX-wK0QcG8ZASbWmrI41nzNl~S9DkQ2AjEi3I4heqYpwQCklWqGJxAX5zwb2JBzENfPQpYX9zYU6tnV5xigtQ2SKizi-E5n~rek44Vx38AS6NUe5xyvf0LwZQ__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/0130/d345/6ebd49db57fd88c39f7795f97c76b681?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fLHQnTLN~vvPxK0WhW4T6xHbh0IefllV9~Pk82nF~EP0LxKZ8a1uCGgXqrH6cwmycxNmhTJtk2ZCJs~4Fn7m9KtdWqSqMx0eh6QP75N-L0PIhGFfJ7KYDY0uSp5S0ZF-WP7Vz5p6Ae9KKryV4HjVRw5-abJx-avYlrNwTxlZuT~D1pQSwmqZNPEQDnTlNxxEovYS688gSuO~B~7uBX78c87UWgBa5tX-wK0QcG8ZASbWmrI41nzNl~S9DkQ2AjEi3I4heqYpwQCklWqGJxAX5zwb2JBzENfPQpYX9zYU6tnV5xigtQ2SKizi-E5n~rek44Vx38AS6NUe5xyvf0LwZQ__",
      },
    ],
  },
  {
    id: 4,
    userId: "4",
    userName: "Fabian",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/3016/2de4/c907a34ba435fc71bec86f1d51c62a0d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fi~XA7G2VOiyxi1ShqdIg94eDQ4oqLWJ4lunAuEgiTmPPhmA2V6PsetOVZLXnOhioqsNvbt70JYKiFBZiaJnz8LUfkgwUu7mLJIVxAj45PiiBEi~FyWAuIUsH6aA7sbTqdjb~EU2ehRcsaaGFOxuJgcUFprR5Sx~kkvy3UojSVcd8nHwncTMEtroYIOo5JlrAlntHxyh29wbjb5uG6ynoIXfPsRgaGIOyGFBiT5~TFwvs9rANNvvTIGCLPEzV~B5HQUt4WPnvalTNtHdbqNHFClgIoT3e6VkE5mVzIzwLxIibjJ4TSdMNhVrD9o~yKOigY~Fw-BUi7kGWuALb7ifHA__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/3016/2de4/c907a34ba435fc71bec86f1d51c62a0d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fi~XA7G2VOiyxi1ShqdIg94eDQ4oqLWJ4lunAuEgiTmPPhmA2V6PsetOVZLXnOhioqsNvbt70JYKiFBZiaJnz8LUfkgwUu7mLJIVxAj45PiiBEi~FyWAuIUsH6aA7sbTqdjb~EU2ehRcsaaGFOxuJgcUFprR5Sx~kkvy3UojSVcd8nHwncTMEtroYIOo5JlrAlntHxyh29wbjb5uG6ynoIXfPsRgaGIOyGFBiT5~TFwvs9rANNvvTIGCLPEzV~B5HQUt4WPnvalTNtHdbqNHFClgIoT3e6VkE5mVzIzwLxIibjJ4TSdMNhVrD9o~yKOigY~Fw-BUi7kGWuALb7ifHA__",
      },
    ],
  },
  {
    id: 44,
    userId: "44",
    userName: "Fabians",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/3016/2de4/c907a34ba435fc71bec86f1d51c62a0d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fi~XA7G2VOiyxi1ShqdIg94eDQ4oqLWJ4lunAuEgiTmPPhmA2V6PsetOVZLXnOhioqsNvbt70JYKiFBZiaJnz8LUfkgwUu7mLJIVxAj45PiiBEi~FyWAuIUsH6aA7sbTqdjb~EU2ehRcsaaGFOxuJgcUFprR5Sx~kkvy3UojSVcd8nHwncTMEtroYIOo5JlrAlntHxyh29wbjb5uG6ynoIXfPsRgaGIOyGFBiT5~TFwvs9rANNvvTIGCLPEzV~B5HQUt4WPnvalTNtHdbqNHFClgIoT3e6VkE5mVzIzwLxIibjJ4TSdMNhVrD9o~yKOigY~Fw-BUi7kGWuALb7ifHA__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/3016/2de4/c907a34ba435fc71bec86f1d51c62a0d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fi~XA7G2VOiyxi1ShqdIg94eDQ4oqLWJ4lunAuEgiTmPPhmA2V6PsetOVZLXnOhioqsNvbt70JYKiFBZiaJnz8LUfkgwUu7mLJIVxAj45PiiBEi~FyWAuIUsH6aA7sbTqdjb~EU2ehRcsaaGFOxuJgcUFprR5Sx~kkvy3UojSVcd8nHwncTMEtroYIOo5JlrAlntHxyh29wbjb5uG6ynoIXfPsRgaGIOyGFBiT5~TFwvs9rANNvvTIGCLPEzV~B5HQUt4WPnvalTNtHdbqNHFClgIoT3e6VkE5mVzIzwLxIibjJ4TSdMNhVrD9o~yKOigY~Fw-BUi7kGWuALb7ifHA__",
      },
    ],
  },
  {
    id: 5,
    userId: "5",
    userName: "George",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/e48c/9525/2d2942319899d7806e984cd444389e8a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ODu-CLbVfLzooRMl6NKG7XYGd8ipCETAWcgv~SmXRCda8MQbqjxHNNvbelQgeHX9F8jbT22dYQWTXmhKlri6rd6tdDKj6nkGjMqaXNmsPF5iC6iSGwyzPWGZHP1Vj01FElUEe1b2ebzpcIY6ahkpiutRFoyj9o9lGdgc6uOLgpTtkI7Qqzn-9ph7D3mzvVV5qceyetB-LxGmlA8TDLhIyuXthSIkxGclqBYStPUB8Ozep6aOraCiPHeZox6Uj65lD9vEDdXaJ88Gag9RC2GBliqFjNAwW-cNrE1Gj5YVGCLjj7NAVCXkxOcWX07xkzySDwcL8Kme8dTz66HHUBfltA__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/e48c/9525/2d2942319899d7806e984cd444389e8a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ODu-CLbVfLzooRMl6NKG7XYGd8ipCETAWcgv~SmXRCda8MQbqjxHNNvbelQgeHX9F8jbT22dYQWTXmhKlri6rd6tdDKj6nkGjMqaXNmsPF5iC6iSGwyzPWGZHP1Vj01FElUEe1b2ebzpcIY6ahkpiutRFoyj9o9lGdgc6uOLgpTtkI7Qqzn-9ph7D3mzvVV5qceyetB-LxGmlA8TDLhIyuXthSIkxGclqBYStPUB8Ozep6aOraCiPHeZox6Uj65lD9vEDdXaJ88Gag9RC2GBliqFjNAwW-cNrE1Gj5YVGCLjj7NAVCXkxOcWX07xkzySDwcL8Kme8dTz66HHUBfltA__",
      },
    ],
  },
  {
    id: 6,
    userId: "6",
    userName: "John",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/e48c/9525/2d2942319899d7806e984cd444389e8a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ODu-CLbVfLzooRMl6NKG7XYGd8ipCETAWcgv~SmXRCda8MQbqjxHNNvbelQgeHX9F8jbT22dYQWTXmhKlri6rd6tdDKj6nkGjMqaXNmsPF5iC6iSGwyzPWGZHP1Vj01FElUEe1b2ebzpcIY6ahkpiutRFoyj9o9lGdgc6uOLgpTtkI7Qqzn-9ph7D3mzvVV5qceyetB-LxGmlA8TDLhIyuXthSIkxGclqBYStPUB8Ozep6aOraCiPHeZox6Uj65lD9vEDdXaJ88Gag9RC2GBliqFjNAwW-cNrE1Gj5YVGCLjj7NAVCXkxOcWX07xkzySDwcL8Kme8dTz66HHUBfltA__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/e48c/9525/2d2942319899d7806e984cd444389e8a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ODu-CLbVfLzooRMl6NKG7XYGd8ipCETAWcgv~SmXRCda8MQbqjxHNNvbelQgeHX9F8jbT22dYQWTXmhKlri6rd6tdDKj6nkGjMqaXNmsPF5iC6iSGwyzPWGZHP1Vj01FElUEe1b2ebzpcIY6ahkpiutRFoyj9o9lGdgc6uOLgpTtkI7Qqzn-9ph7D3mzvVV5qceyetB-LxGmlA8TDLhIyuXthSIkxGclqBYStPUB8Ozep6aOraCiPHeZox6Uj65lD9vEDdXaJ88Gag9RC2GBliqFjNAwW-cNrE1Gj5YVGCLjj7NAVCXkxOcWX07xkzySDwcL8Kme8dTz66HHUBfltA__",
      },
    ],
  },
];

export const postTestData: IPost[] = [
  {
    id: "1",
    content: "Ping me if you wanna talk about Trump memecoins",
    createdAt: new Date(),
    author: {
      id: "1",
      name: "Miranda Kehlani",
      avatar:
        "https://s3-alpha-sig.figma.com/img/8a02/8648/ba46efd818c6a40fec5a8b546e01fa80?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gA3-WSNddEx2nAwMOO16ZVm50E6CVwv6B8KtykKN8pCT-Uz6LxhbSdOspDofZTbltw84RLXsu3OOeYGuFOaXRjYevlp5J7tzVIDzLuxw6W40DFbbsswEapDKwux4Yd9O~4hwUKGHVGbkGOMUu6TbUuKFjSr5t0s912GXNWJ4yoDgUixXDQSLwLmAl99007Zp-S9RlpArWrV5rnkAfW7X2Fz19wWsi-b2dbA22XqmV7bLhV5xgyDkYvMVbj663VXWFdsO7tpkAcnBTDjuyAX1R26L-5LVnOf6-KWqJCDN~Zo0rOWc~8iVlsqHy5mqpOvagEPEzFzHNaRWvAjlEPeb6w__",
      location: "VIETNAM",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/131b/d108/49fb33a7941fdea941ae87ed11c103d3?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QDrnPcwOlug5K4IdMe-KtGePBv4kQouYxGWbc54fBd8Sl3RF8uZ-XeHWyDwXFDOUuch1yJj8BU4yVceh19igxJBo10ZP~tD6E0D630Lne2kULPIxuybFd~84uSS0bW0CBRchkIIioY~vZbhvAodSNHD97e5QBVnLX5X8kxg5E8r-ovKIfIfCVIKGBIcR4u1xgNb12PjE8ygY1BmDdvkbQZa-Mw65UWffDIk26CT5ItXxa01p6vLh0iZP6wIeSQaUvO5gXW6S0eY~~5vNWcg6ioMi6PLDLY1FjH1av8gLoqg69j9m3XC9u3EChCDKQwLdeopD5KPcXjMiGk75sQbjcw__",
  },
  {
    id: "2",
    content: "Who do you think will win Euro 2020?",
    createdAt: new Date(),
    author: {
      id: "2",
      name: "Brandon Aminoff",
      avatar:
        "https://s3-alpha-sig.figma.com/img/bdee/9c5b/82d3af637f56f526634d05993f85c521?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SmRI82ckyGq-B~eK55iiM-26jevsrFcfYCwaIGgtXPAH7pXevpIxAXjPJwvzdGFPuXOR2KYDoMh3T2sE~w4YNQ2-KjfRu90n2izM8Ev2CQAbJkf3zuy91yEVpOYrC4t8JV7CsJlluUCnL5IsOn3isp5ldVWn1T-jss3gJX3Xpxqa3GXgtmYnyEv047EI1b-itslUEcEAFQocqnZTxjVp4g6Epg584fCzwbyVG67P6~vtKEK~KXnoRhW87-H~Dc0YqE4vpTQl4cfTi9uuufQ1LdQAr-iEZTASYOh90AO7NBTXphzmSU3hFY29OB-fY4avCDw52xLuT106qTbZVpdACw__",
      location: "HAMBURG",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/9880/e0eb/a7663e38645e173c971cc65186b3aa3f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ahZJ2p8P-PGmS0plddbSbganCcTQDmuVr7cfTOL8bquQeNIpe2q-X2vXbQvjc3Aa3TMhE3miWY8brRJXPgXxTu8gCjc7odGsH830utEB7Y3iDN4Re0TVqsKvq9ZyPp7uygiVoUQqnBOyyRnh4m6XFSvV2jgI1FmuLOOqclvAjoFBRFF0b2T71Sf0fCQIPayariakfUy5X7sheWPL9-DmzgEjXDrBrgcXYVm8eVqt6986L09WOv6AoTOb9Gyo9pebxHEXbiYLk5vfFqotGiFGzSVVFcViK0Im8giUKQI-uAqJqK5E6eXk~zx0vtx5IfMLjZmPjRPQk3ggbhesL8m~7Q__",
  },
  {
    id: "3",
    content: "So lonely here guys, wanna talk with me???",
    createdAt: new Date(),
    author: {
      id: "3",
      name: "Anna",
      avatar:
        "https://s3-alpha-sig.figma.com/img/2abc/9621/62a5490bdd30048513796d066a106cde?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ln~B3h9XZwyq76a4gBIA2jlxOFqTmKLaNLlPO6a3z3QrfM2alpJT1dnGbByjqRX4B9zn6WfUYpYOwurHJPa5vjcE3PIZj4J4VpON0clArMVqj9nUwJUSafWvDP67~-9w23uJVHG-0bsP1pRzjV4UFtOqctraVw7fginyZ4iqlwgTc6o8rS81~UQWy6Lf8Ky66wZs7JKgQ8AMG9DabSGk83VPwnwq6c-OxwKzc4Bl2EZIiOrD1D48EONifWo-vY5f2EjWwHI9yrnRa2OLM1VLHFhpecWThLLT7Kp7LpTJoOQ2GA8mz99uuym4KBe11wM961zK9IhwuT3Z0vu~~Dy6Aw__",
      location: "USA",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/2abc/9621/62a5490bdd30048513796d066a106cde?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ln~B3h9XZwyq76a4gBIA2jlxOFqTmKLaNLlPO6a3z3QrfM2alpJT1dnGbByjqRX4B9zn6WfUYpYOwurHJPa5vjcE3PIZj4J4VpON0clArMVqj9nUwJUSafWvDP67~-9w23uJVHG-0bsP1pRzjV4UFtOqctraVw7fginyZ4iqlwgTc6o8rS81~UQWy6Lf8Ky66wZs7JKgQ8AMG9DabSGk83VPwnwq6c-OxwKzc4Bl2EZIiOrD1D48EONifWo-vY5f2EjWwHI9yrnRa2OLM1VLHFhpecWThLLT7Kp7LpTJoOQ2GA8mz99uuym4KBe11wM961zK9IhwuT3Z0vu~~Dy6Aw__",
  },
  {
    id: "4",
    content: "Share with me the type of girl that everyone likes the most! 😆",
    createdAt: new Date(),
    author: {
      id: "5",
      name: "Parody Elon",
      avatar:
        "https://s3-alpha-sig.figma.com/img/3016/2de4/c907a34ba435fc71bec86f1d51c62a0d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fi~XA7G2VOiyxi1ShqdIg94eDQ4oqLWJ4lunAuEgiTmPPhmA2V6PsetOVZLXnOhioqsNvbt70JYKiFBZiaJnz8LUfkgwUu7mLJIVxAj45PiiBEi~FyWAuIUsH6aA7sbTqdjb~EU2ehRcsaaGFOxuJgcUFprR5Sx~kkvy3UojSVcd8nHwncTMEtroYIOo5JlrAlntHxyh29wbjb5uG6ynoIXfPsRgaGIOyGFBiT5~TFwvs9rANNvvTIGCLPEzV~B5HQUt4WPnvalTNtHdbqNHFClgIoT3e6VkE5mVzIzwLxIibjJ4TSdMNhVrD9o~yKOigY~Fw-BUi7kGWuALb7ifHA__",
      location: "USA",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/3e36/3294/d000148ee952d4d19b62e6113a9369ea?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p5p1yLb4j6WTJVZXw4pt9acuimqsxn7t3-gALFmVUkdAI2z9~gyRoMJUUin36YTsWgI2zyP~qN72pjWJwht-Lj9MMPJDKCxAdbRoksSAi8oVFA52bKOsyM4PHk2u39DrQztRJ8osygW9~g8RbxYrM6L3lJRcN9fNpAGZEpnSg-B6rpM3hncPhGQNwo-gnPjwT4bnsigtjHQwMZoM6uXy1hykviyyudApkc1bBlb2PpvCvZh3vbM2rj5e7RlUeKb92dmRoJqt0IRRueWcUukyUlplBuChzfg67SSWgo9rGXzRVaRtWoOrypLqO3C23mrCw5cgNdm-7ZfTeCAMFYEBfg__",
  },
];

export const currentUser: IUser = {
  id: "0",
  name: "Clara",
  age: 25,
  location: "VIETNAM",
  interests: ["traveling", "cooking", "reading"],
  matchesPercentage: 0,
  image:
    "https://s3-alpha-sig.figma.com/img/2469/ac39/644d69ec85f3953e6b180a44125072bc?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NZ84ch59nj1kXTPBmu8IkHFLb20ylYkhoLIlhqQEC4aUyLtHPUTQw4MjoKAxgEF~xxD6AsKCHsKYA81R9HD1VwcLdC3F5tpeO0Nd8s8kvQg~YmqcFFrxD8d9il1Xf9eewIIMiNIGsPgMvuwgByH~doSiOkaosVWJcBqAMlqBzqqKZiMT1UWh4j9nYyq0dbhJ7TWlKSxvB5G5ZUO1ZDab83Rg8I6IPsZUAiI2I2CtBaGJEHakw9fjV3Ak6RKK9BLr7FUQc3-8Mkuvha1wmEaOFX~~TfZ0L8G8LcvnQ2-0W3iuxV4VYucA2jsgn0vspXyfsp~-4x9zJVcuTsYbL1x9mA__",
};

export const userTestData: IUser[] = [
  {
    id: "1",
    name: "Miranda Kehlani",
    age: 25,
    location: "VIETNAM",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 80,
    image:
      "https://s3-alpha-sig.figma.com/img/1257/ecc5/d747f6ffe0f4097ada4a6bcf6d9e09bd?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EUoeh5tGePgs3zuz1J2toXBUDDoSJv65NgpBelHYdWJ1ZaSKWMtAb0QpI2yxszvXaByScLfrS5iR~Ymso7pynEqj7gnLsNcLGFWAB2PZUFaCalFPS0Lf-o-fct7SjtXE9AmZF8yhU3ByYJjkE9Ak7FHNJsIpRVxxYvHUdZQ~mlMTXg33X5ZRiVWx6LsQyetNU2QOixvmuBOLEroS~vRvNwSqjIjj0BSFB1QN~YbgjZ9lmWqsHrsMu7LEF7iy1XHrVl3nOymeWZw6olfVCfFWATHQqIaLcRAUw3ROarLCPXi9wXTHGNLanOPxvGvmEW7HPr1sgs9dSSwhHB~c35ExSw__",
  },
  {
    id: "2",
    name: "Brandon Aminoff",

    age: 0,
    location: "HAMBURG",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 75,
    image:
      "https://s3-alpha-sig.figma.com/img/e897/bc01/416a1ad9e5862df12c5876b8fdaee1a6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pFgikxL9470x57nM7Pn3SkHxCnssEvasQYzr5~kISsIT3F12BGUvVYmJPJ7~NeRbgytBxDKXWdJB-wWmkNqWq01iYmYhIN9QIIrW7H3rwWYiPTTMqsitnIK9og5ppmIWg00EnaNI-hPD2iEXGy2hdy4jcNfWOD9Rj9A1GEkGjYXZkZrt7laU41mWmf0Yj4zgd7X6mWbR1mZzXzRNiBEVJ1PJJVNnOdc1P3heX~tOEQgWrCrjl12916Oi4SLDeHBmB1X77uIG-XTsUFqasb1yFReqSAIzpSDUT2Qu1CK79Nf9H31Wl9MhE9apjwi5BmYEm3GSOXcZ9OBtqf0DLlXD5Q__",
  },
  {
    id: "3",
    name: "Anna",
    age: 15,
    location: "USA",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 60,
    image:
      "https://s3-alpha-sig.figma.com/img/191a/8594/3c2a441579e62bdf84ae773361cba7fc?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tB9MytP9fEa-3WFDHakOaIdX9bTHuHkj2o8SHSUXg8CPMk6YUh4xvYWG6fuBFzIR54f5skX6X1FXTc2Wks6dNlixqS9yNuu2f7W3AH6LLwiNYWxoBur43LjsdiWuDfye5BAJE0xhv7v~vfaYCuu1jEd8bhnk2WLCKzmckMWoHi4brxaPO0DYobbo2fFO7PViTbd9FFafTpQB9QnWpaCqAvF8MwICvCZE7XxTLW-n6zLxqsuibTW0e-eU8vWH18LWSFEImYUYmx86hgDDdYXquG3WXjiZvEWy47rPWmiVp0VZd2~kquU5nGcFLaWKSLlpNdqwm61DsyndC-gDY5JKQg__",
  },
  {
    id: "4",
    name: "Parody Elon",
    age: 25,
    location: "USA",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 50,
    image:
      "https://s3-alpha-sig.figma.com/img/cfd1/d208/e55c89f7f064a81fab5a5894dc819723?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CfHQpBF6~dGTZFsWxvi90LtEKdCxmjdMciYLL2BVN8uxoBYvE3bnopCIOaHpl8jCs8T7EzXwXRc-gyufZV-T-UvucyfqI3IRSUm2MDVFLIGvp2KuHwB92JWikj3lWwts-M1N83bOVzvW6q6rUmtspetRjkWhP88CZGj~2pAYebGQnhSbR5m5v0btE3A4ejTyomle3eWO9-mrd~VzJy-xn-2ZtccVbDLwHsISzvlve02ankEZaySmLZTJODiL6-qmzbRGsdgZgIOCFP~CnURzm35rqCWKh8uLg2sZYMGzpnbzzD9vdLWyhK~8fWycyUAyhNPONU3Gl5e~XBo0nTWQqw__",
  },
  {
    id: "5",
    name: "Eddie",
    age: 23,
    location: "DORTMUND",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 65,
    image:
      "https://s3-alpha-sig.figma.com/img/f108/994f/df80102efce40452125cc5746b8fbc47?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jpy1zjcRbs~gNMFCZEvyPmIDgg1CAs0VM0yRQ6XqxbsgrVtnUFclnbbczv4w6D3nu3USm2zkWCkzMfu4B1NWdOHQeNvmRL4cC5BBgGNzQFimFkmpyckjZIK-NhcpIL-o56HKEQ0EvZOo~GpiSh4wnS7HKimWu3lvBY~H0qHQxXKIHjyAbv08davmGcIY2YgqAUJY4v8dJJpuKIhXpQlc308deeMMgKmw9J~~GmDDb-mMFKOx1tMEYfbhjxnnW6cFXJOWQVjLrXRNsr7yMRRxM6MnX8eV3u7eGdONhJu1vLCBR8YjRTeeqY304scycdAbPO2NBLRWe8z8zQwAyZrOwA__",
  },
  {
    id: "6",
    name: "BaoBao",
    age: 18,
    location: "VIETNAM",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 70,
    image:
      "https://s3-alpha-sig.figma.com/img/9123/c4b0/15f0eca05d78fe0e23b672e1207791f9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nUrSgsZQwDguLxhg2LXOc5~zHsF9YFz0-P09cO7SY12o9GYsNocJ6sPwQzEZ-IPK2e0goWYWlFe4QBfHQR5XrwmD2E4IC~ujlqFJDExShrMte7TSnrdvAlRhdCG1z0p~U2pZUk53TxnDHzbFhCTp5b93NAvCsudHR6-jiq6B2iwU0Qjnfe1Ff27mkj~TWEnBLaPGY~-gvGlnIzDhrJmgQdnEuYwD-j7dIoX6SSxUdmUue6WrrPrvlNimyjunTwOAPlksq~oLv3kzdgNrdauKHe66Xj0xmBI42MNOglNVTKEsRe49tkxS5TKSazts7uMTy2xpFdNBT6fQTAXQPQprMA__",
  },
  {
    id: "7",
    name: "Chris",
    age: 25,
    location: "USA",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 80,
    image:
      "https://s3-alpha-sig.figma.com/img/fbbf/d684/015f685de24ada3dd686e216ebd1a3bb?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iY7b25l0khEOdPnJSLcdDcOjTAmXz4EhaTKNhdugpQTbccmWnmPqf6Bfrf3TRk1LlHrVdKMvzeU-GlsgMPkVtAveqoJSk6m-BJIUohCnHaymE13nas1SLJj~bI3pmAF0N4fm9nfQynhX3vOLxLNFx90i6Zy-YQczc4FEsg2pHdmc5z3AfL7nRX77WDxS-ASGy506Z7pb~ttGpS-ARszH~155ASr9~FdZpPoW~Ffgv6pOrYxijs9fQM1nj2ovweSgaVeTNKLQ14yFnM4Hux8u6zGhYm64DzmnWT88aHSgKPCh1Ue7dODMq4p96HeXgGecDW5ksJ2s7NphsxWCtnCF4w__",
  },
  {
    id: "8",
    name: "Finn",
    age: 21,
    location: "COLOGNE",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 85,
    image:
      "https://s3-alpha-sig.figma.com/img/46ae/4423/ac7b3f93af2508943645cbc3d35fdc62?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HsHhmJ3mzLZ18DxROIrQgMvnU2Nkz6Z6WDPA8rfSLqcSBgcEd77MgwZI0ubOqCaGRofMaU~kfiTXPhYIWO4GJ0-QHmWKEBe6weEFoCDhrDlXhfVfpxvaQds~Wj~Q~DdD-L4o77LjGF3uLR98Ti-XgpXQYwQxa0u45LRsdInq4q4mlq09dji1uk8bC6iWtNb6urwF7-W6Ck2IqnUUIBuJPYCioBh-yVUlTcBXb4mLVbsHSiFfyMTF~sOYSsHYgfwCmB35o-Hb~J1YeZIDiZpCZkr68oIc5nNuOtnbwdf7rh5n6bFq2mSUtg3lVUOsPXH7ZsM07gALQ1e-7g0stJJWUA__",
  },
];

export const conversationTestData: IConversation[] = [
  {
    id: "msg-1",
    from: userTestData[0], // Eddie
    latestMessage: {
      content: "Hey! How are you doing?",
      createdAt: new Date("2025-03-20T10:30:00"),
    },
    unread: true,
  },
  {
    id: "msg-2",
    from: userTestData[5], // BaoBao
    latestMessage: {
      content: "Nice to meet you!",
      createdAt: new Date("2025-03-20T09:15:00"),
    },
    unread: false,
  },
  {
    id: "msg-3",
    from: userTestData[2], // Chris
    latestMessage: {
      content: "Would you like to grab coffee sometime?",
      createdAt: new Date("2025-03-19T18:45:00"),
    },
    unread: true,
  },
  {
    id: "msg-4",
    from: userTestData[3], // Finn
    latestMessage: {
      content: "I love your travel photos!",
      createdAt: new Date("2025-03-19T15:20:00"),
    },
    unread: false,
  },
];

export const messageDetailTestData: IMessage[] = [
  {
    id: "msg-detail-1",
    content: "Hi Nadia, Baobao here! 👋",
    createdAt: new Date("2025-03-20T17:34:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-2",
    content: "Hey Baobao, Nice to meet you! 😊",
    createdAt: new Date("2025-03-20T17:35:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-3",
    content: "You too! Seems we have some things in common here",
    createdAt: new Date("2025-03-20T17:36:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-4",
    content: "So what song are you currently listening to?",
    createdAt: new Date("2025-03-20T17:00:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-5",
    content: "Been listening to John Mayer's new song, Last Train Home",
    createdAt: new Date("2025-03-20T17:01:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-6",
    content: "Oh nice! I love John Mayer too",
    createdAt: new Date("2025-03-20T17:02:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-7",
    content: "What's your favorite album of his?",
    createdAt: new Date("2025-03-20T17:03:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-8",
    content: "Continuum is definitely my favorite! You?",
    createdAt: new Date("2025-03-20T17:04:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-9",
    content: "Same here! Gravity is such a masterpiece",
    createdAt: new Date("2025-03-20T17:05:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-10",
    content: "Would you like to go to his concert together sometime?",
    createdAt: new Date("2025-03-20T17:06:00"),
    sender: currentUser, // Current User
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-11",
    content: "That would be amazing! Let's plan for it! 🎸",
    createdAt: new Date("2025-03-20T17:07:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
  {
    id: "msg-detail-12",
    content: "Nice to meet you!",
    createdAt: new Date("2025-03-20T17:08:00"),
    sender: userTestData[5], // BaoBao
    conversationId: "msg-2",
  },
];

export const tokens: IToken[] = [
  {
    name: "STT",
    symbol: "STT",
    image: "https://somnia.network/favicon.ico",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
  },
  {
    name: "Tether",
    symbol: "USDT",
    image:
      "https://smithii.io/wp-content/uploads/2023/04/png-transparent-usdt-cryptocurrencies-icon-thumbnail.png",
  },
];
