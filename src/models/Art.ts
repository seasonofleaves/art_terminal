//Data from the api

export type ArtData = {
  id: number
  slug: string
  height: number
  width: number
  originalLink: string
  imgUrls: {small: string, large: string} //define as an object with curly braces, define the data inside the object as string, number, etc
  description: string
  attribution: string
  color: string
  admirers: []
}

//name the data what you want
export class Art {
  id: number
  slug: string
  height: number
  width: number
  originalLink: string
  imgUrlsSmall: string
  description: string
  attribution: string
  color: string
  admirers: []
  constructor(data: ArtData){
    this.id = data.id
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.originalLink = data.originalLink
    this.imgUrlsSmall = data.imgUrls.small
    this.description = data.description
    this.attribution = data.attribution
    this.color = data.color
    this.admirers = data.admirers
  }
}