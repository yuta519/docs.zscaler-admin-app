import axios from 'axios'
import { remark } from 'remark';
import html from 'remark-html';

export const getBlogDetail = (filename: string, setState: (md: string) => void) => {
  axios.get("https://md-host-bucket.s3.us-east-2.amazonaws.com/" + filename)
    .then((response) => {
      return remark().use(html).process(response.data)
    }).then((result) => {
      setState(result.toString())
    })
}
