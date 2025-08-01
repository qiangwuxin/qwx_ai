import axios from './config'

export const getRepo = async (owner, repo) => {
return await axios.get(`/repos/${owner}/${repo}`)
}

export const getRepoList=async(owner)=>
  await axios.get(`/users/${owner}/repos`)