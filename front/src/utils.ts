export const emptyFunc= (e:any)=>{
    e.preventDefault()
}

export const checkAccessToken = (token: string): boolean => {
    return token !== ''
  }