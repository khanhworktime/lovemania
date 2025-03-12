import { IPost } from "@/interfaces/post.model";
import { IStoryLine } from "@/interfaces/storyLine.model";

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
    id: "3",
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
    id: "4",
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
];
