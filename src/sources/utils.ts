import * as OpenCC from "opencc-js"

export interface ISource {
    name: string
    f_name: string
    url: string
    filter?: (raw: string) => [string, number]
}

export type TSources = ISource[]

export const converter = OpenCC.Converter({ from: "hk", to: "cn" })

export const handle_m3u = (r: string) => {
    return r
        .trim()
        .replace(/\r/g, "")
        .split("\n")
        .filter((r) => !!r)
}

export const with_github_raw_url_proxy = (u: string) =>
    `https://mirror.ghproxy.com/${u}`
