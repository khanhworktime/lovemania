import { IPost } from "@/interfaces/post.model";
import { IStoryLine } from "@/interfaces/storyLine.model";
import { IUser } from "@/interfaces/user.model";

import { IConversation, IMessage } from "@/interfaces/message.model";
import { IToken } from "@/interfaces/token.model";

export const storyLineTestData: IStoryLine[] = [
  {
    id: 2,
    userId: "2",
    userName: "Selena",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/7905/b70b/9309994802ad82f715678dba7b3f15af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p85AlXWRRT04mS4ORkes0TLS7QGWaoBH0T-lArsAIQUtYaXowd3-moAI~UEhS8airE6ACemtetTyvvQiWS3FSUxl9EEdGBRP~Vz3Ipck0LwVVVBqW5oWZWja8x7UlWOkN52xN7G~dYUS5BORhztRXV7KZdon1rHIP3v-EXThgchjEM5uS-WCtsuBu4XQHREpKxwrvASksmKK5kJkJK4tk1CzodlCwIR1j4pU4gUZH30Z0FpPgqYFJxE3HUxrw~LQZEZVxv~OqkevAO2qOv~zf4R5kaV3HCJanC-t1V3JA6AHmReCsq6OsUgPwrwO34roAvI~786~tusUE0bJAYEwmw__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/7905/b70b/9309994802ad82f715678dba7b3f15af?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p85AlXWRRT04mS4ORkes0TLS7QGWaoBH0T-lArsAIQUtYaXowd3-moAI~UEhS8airE6ACemtetTyvvQiWS3FSUxl9EEdGBRP~Vz3Ipck0LwVVVBqW5oWZWja8x7UlWOkN52xN7G~dYUS5BORhztRXV7KZdon1rHIP3v-EXThgchjEM5uS-WCtsuBu4XQHREpKxwrvASksmKK5kJkJK4tk1CzodlCwIR1j4pU4gUZH30Z0FpPgqYFJxE3HUxrw~LQZEZVxv~OqkevAO2qOv~zf4R5kaV3HCJanC-t1V3JA6AHmReCsq6OsUgPwrwO34roAvI~786~tusUE0bJAYEwmw__",
      },
    ],
  },
  {
    id: 3,
    userId: "3",
    userName: "Simon",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/0130/d345/6ebd49db57fd88c39f7795f97c76b681?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h5HBE6wVLB4iJcX48eFNaXcetNn-GHTGLsKtt0WWJL43z1was2j~82Fp0E~NgE3IVEBUfXE7~-mV9rD~ipE9K3cY0MRmTPpRdbsFKmU-ZO4ULbHRZzbE5dmr2OqEbx17FMozvzVPHwVyFiz3pZOwrcP9dVOccz0LnOC1gmUj-np3uTFSbLWt1Vo2zUSv8uxNDDGPYvDxy9g9~CP~srotFjjVx9KuKB55mTOaBUJZgErqMHn98K7ogmnfiVJtDG0CmWh3o1ke0I7h8r7fHwk2tJTyjr3kWWkmZAOlHwhu6UnMDpPpmbCEH8JRnzpWHZmZoIe9q6LxGLI0BeWgj4~LMw__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/0130/d345/6ebd49db57fd88c39f7795f97c76b681?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h5HBE6wVLB4iJcX48eFNaXcetNn-GHTGLsKtt0WWJL43z1was2j~82Fp0E~NgE3IVEBUfXE7~-mV9rD~ipE9K3cY0MRmTPpRdbsFKmU-ZO4ULbHRZzbE5dmr2OqEbx17FMozvzVPHwVyFiz3pZOwrcP9dVOccz0LnOC1gmUj-np3uTFSbLWt1Vo2zUSv8uxNDDGPYvDxy9g9~CP~srotFjjVx9KuKB55mTOaBUJZgErqMHn98K7ogmnfiVJtDG0CmWh3o1ke0I7h8r7fHwk2tJTyjr3kWWkmZAOlHwhu6UnMDpPpmbCEH8JRnzpWHZmZoIe9q6LxGLI0BeWgj4~LMw__",
      },
    ],
  },
  {
    id: 4,
    userId: "4",
    userName: "Fabian",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/3016/2de4/c907a34ba435fc71bec86f1d51c62a0d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iQYYEFgun9warzF-pPzJCNKMgHCL3d6wAhIDnRj0Zh9W~hdyh6P-gIodRuBO-HqiUuf0PnzuBTA345Xx1wLeLgEbZ1Gc~uzLq8Y~~EPUvGmkFRHNMzXLj1GJ6yfF~ST5HVO7-76WTAMDk5gFsLRoP3FlGgnoSdksTnfbWK5isRuLhNo0j9hqam5zmetJrGLx9YWvDgATQAA5ROCeRJw04M46YZHfPvNB7b2211q9MC4IpGpf5QvBFx~P2XOMTuJmiAzgJXLMmZel7ia359bdYE1R3QcndSDZjktD41Ci~xQFpeKwC~Xpu1z2sD~9Mw-E09GphGw44hClhtPKiWxUhQ__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/3016/2de4/c907a34ba435fc71bec86f1d51c62a0d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iQYYEFgun9warzF-pPzJCNKMgHCL3d6wAhIDnRj0Zh9W~hdyh6P-gIodRuBO-HqiUuf0PnzuBTA345Xx1wLeLgEbZ1Gc~uzLq8Y~~EPUvGmkFRHNMzXLj1GJ6yfF~ST5HVO7-76WTAMDk5gFsLRoP3FlGgnoSdksTnfbWK5isRuLhNo0j9hqam5zmetJrGLx9YWvDgATQAA5ROCeRJw04M46YZHfPvNB7b2211q9MC4IpGpf5QvBFx~P2XOMTuJmiAzgJXLMmZel7ia359bdYE1R3QcndSDZjktD41Ci~xQFpeKwC~Xpu1z2sD~9Mw-E09GphGw44hClhtPKiWxUhQ__",
      },
    ],
  },
  {
    id: 44,
    userId: "44",
    userName: "Fabians",
    userAvatar:
      "https://s3-alpha-sig.figma.com/img/e48c/9525/2d2942319899d7806e984cd444389e8a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h8lCYQLZCTQrSQgGXDs0ioo~3SdaERRfwB-w8S5TIFgMZz3l5DEei4DCyG87BSNU4CsuOboievfx8fOYJqEU0qxEEq9-O8sNu0k59vSNAjbuwpnlpVQ-C6bu~ZDdq8zOXduRDML4L0AOIKdd0sAJo7tTPvWKLbuoT8VqCTSXCpLl-4VrPi2jJecYUR5MJ6u7c60L-ml0N4MQJYF2yyLpHruCj6LkKbRxO~IUvtltyUmzDe4S-UE01jFmUioNFdWB0nSLWWK0DjSU3x17tZEuJeZYB9cgfzIJzZa7qCinm0NFclPW34LbLyKs7iBieD9-b6yC4VOxQ2cG29xxBw3Yww__",
    storyLine: [
      {
        image:
          "https://s3-alpha-sig.figma.com/img/e48c/9525/2d2942319899d7806e984cd444389e8a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h8lCYQLZCTQrSQgGXDs0ioo~3SdaERRfwB-w8S5TIFgMZz3l5DEei4DCyG87BSNU4CsuOboievfx8fOYJqEU0qxEEq9-O8sNu0k59vSNAjbuwpnlpVQ-C6bu~ZDdq8zOXduRDML4L0AOIKdd0sAJo7tTPvWKLbuoT8VqCTSXCpLl-4VrPi2jJecYUR5MJ6u7c60L-ml0N4MQJYF2yyLpHruCj6LkKbRxO~IUvtltyUmzDe4S-UE01jFmUioNFdWB0nSLWWK0DjSU3x17tZEuJeZYB9cgfzIJzZa7qCinm0NFclPW34LbLyKs7iBieD9-b6yC4VOxQ2cG29xxBw3Yww__",
      },
    ],
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
      "https://s3-alpha-sig.figma.com/img/f108/994f/df80102efce40452125cc5746b8fbc47?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aCMgNvmYYdrBiKCGj2oGqLbsLn9UwYTeqkrdnvznEZyxn2uFdU7pkypHa8Y~MNNbw3SkqrizOzm0ftSwj0D3zypgfYNrGUZOs6lcngtHWPh4YQmKv2eRwF6qW6wVOQLm~rfupxZBn40JxfdQWpHcBEXmb9lOw2rt~N6QEy90HlsBLPlQkW7POhysZhYM2EY~G0T51OWpG4-fd171mmDwcgdiKXxjI1mIfJ0-LZd2yvOQKN~OrAT9i2LtpOrx6wAs-2U2FRrzs8oucYdcqSp8W6Ku1yZUpzv9gbIFJESqbuNqZxWm9PwmqUG59owCmE2PJUZSCiie9CHd3NjUoZjSQg__",
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
      "https://s3-alpha-sig.figma.com/img/1398/2ffd/fdadcd413286d1957a6b477eab57205f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hnbog072jLowrbwYbVfbJxlIhBZk6bAM9PCCW0HtbmrNddUpmnUJJqHrXAzUWNeraiKafxjuVy07MESMTRmOKhvyPjZPayYJCL-7LMNcY84rlXMdKbNdDn2NvH31B5wrZHY4yFUbR3dKyESrQ08ZSThS3lD85d9AtTGGbMgf5cWVA-ZKrBGgmX-8WvxtBfHgbct9jWx8XJJiOGX-OHoQ5wY3-bXfbMIJbldoAMIZooaEylAgEumJQi6q4unug2mbIoHg3v5kyTPjifsB-BxRbxxhoNbBftqDMBBWJnawJkuRU0qbKU3euQU-VUHDQf0Mg8IP4UVnv9K-hVcXaQaMAw__",
  },
  {
    id: "8",
    name: "Finn",
    age: 21,
    location: "COLOGNE",
    interests: ["traveling", "cooking", "reading"],
    matchesPercentage: 85,
    image:
      "https://s3-alpha-sig.figma.com/img/bdee/9c5b/82d3af637f56f526634d05993f85c521?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V3Vb46KrqtKbAM4urQcEWptbUbLAxcT~dgdo7bR1uu0xy2ESAjwzJJgdQ7nuzKTS2sHoF5CAu9iyMD25zxWkRvigM8scYQ8pH9aAyJ82z4afkpQDLT7ucK99x7ACsD8PTQapO79YnFcttydj3TBN1PB0JJ7DD11cUbZk5K4Q0aAC135LDw47gRwGB8R77DaP~gFYaqu7prC0cDGc~AoCecdi17ovmJaT6lJ1rRsjkhyDY0fz1aOoEau5gF1yAoILTvbBubJ3RcS9y2qCd5OK0TpAyYzn2SnEgKhqb5Ps5XgyKFRnJE~n05lQRBJoRAbW4yi-SgKyr1iHbVV8QivJHw__",
  },
];

export const postTestData: IPost[] = [
  {
    id: "1",
    content: "Ping me if you wanna talk about Trump memecoins",
    createdAt: new Date(),
    author: userTestData[0],
    image:
      "https://s3-alpha-sig.figma.com/img/131b/d108/49fb33a7941fdea941ae87ed11c103d3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pMxHglcJLWQjQDd~UXSDtF3afk2ieK1TCCBPwIYsNZaul90Tn5QBzJpgFpz2AzXGvwF07bz992AGVohuFlm4oylhfkh06PqWNddX7nRNLGNlw0I3nvNmqhBdMENEmZxOWMsmawLPKarI4~61mUN1xTapAQ6EmMGr6EGaDBl1~jYpL7cR3ajIGwCc8gM4bZIR1CDR3xcxjjnx9H0uzDFQY3jThQHg4EvVqrKh4hjVRM2n2YmhSN4jgm-eAwoXhfmHeWAfHAZCoO4k~wue11YhQI7k6XaLd-PIzG64EIvmD4GCrkuAtRmUxvhqtWtW3JpgtZ6TDKMSn5UQzpygukhR8w__",
  },
  {
    id: "2",
    content: "Who do you think will win Euro 2020?",
    createdAt: new Date(),
    author: userTestData[1],
    image:
      "https://s3-alpha-sig.figma.com/img/9880/e0eb/a7663e38645e173c971cc65186b3aa3f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iyb8YxuxGvsjeMEMUMgf~1WBprbJA8hJS53QFIiVteI39BcKaRQqxN39j~gJ54wXEqK5kqKrN94hcPe45fIuAOxcZ9hBgpR4j1H72IhdkdZw8SiiRbj6xWD6eXVMncouhnr5ah4PvK7X0Dvi5-~EKEafJdC0~l0-v6JKaXy7-UPrna8jq6eVcYOAowKf2ss-eq1yl8Wv6nnJEfMPrBYFKHr0sbcrcAQVhTcHMQaTFHBOof0I52vvNO3sFz5f-5DvMMroY-JAJmwuSL4OUPtpE2xXPOivkAPbmqUmGVuNL4zmtUv6AWyA41qoqyOyGWPbMxVcuRX8zn0olug0vt-1pw__",
  },
  {
    id: "3",
    content: "So lonely here guys, wanna talk with me???",
    createdAt: new Date(),
    author: userTestData[2],
    image:
      "https://s3-alpha-sig.figma.com/img/2abc/9621/62a5490bdd30048513796d066a106cde?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LOkbXJt2TepSOD3b~BSP70HcL~htPEzQMkT~BZOuLUVBlBRTBWMe5cyNFbHy~y3qUwwLlMhZn3AeMmLB3wZmoFP67wfnCN--JxETC3lVLXT0N8UPJIcRd-VE8J38FLr-JqF4GYKB41i8ecEiSOk0ivwgVw~dPM7WQ6MQ1Xt3VW9bM8aUYjOfef3n-9ib6WSeDrN6Eswz7E7f9x6tedL4L7wA24rCW3Od65M074AA2aupsHpczhPItHoNk0kwQM4J~B3cYBSzW-YugFMyf2WBuTXjUhYX12jFgDP3aikZ7mI86xFQN2c-c0zP4XWVFU0IaFD4uoE7GCo~D2Cpr41yjA__",
  },
  {
    id: "4",
    content: "Share with me the type of girl that everyone likes the most! 😆",
    createdAt: new Date(),
    author: userTestData[3],
    image:
      "https://s3-alpha-sig.figma.com/img/3e36/3294/d000148ee952d4d19b62e6113a9369ea?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pjgO~X3JPfYPMQtZnKc1H7JY~JJFSIyG~FcW1bafHZ8g9MCnuRrrw7GMdQdRZSq7UhKkgqIrd9uBQDBPxhjNAXfitVtwJbi1cRXO63hnJjiVe80KCS9YyRU31wCfPTRVGVxjF~lXACPQyCEf~qYFv1EAEB3BG4uyCWbQ04HUc9SYy~VpfJqplaHcDnZ~7bw70JS7bOd0lj9FwhrLe2U-uGzjwOg6LZ2jidr-ts~7tOKYcQBl-tDuT-9tunE3JFxRDmHZOEBxUNOs8ZYjKxunQ~Dwun5Cm5JKnR2zN7GvFESf88UqKKhofp1M89PsrmqUAJTY8Lv-5bKbTByDH7SqLA__",
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
