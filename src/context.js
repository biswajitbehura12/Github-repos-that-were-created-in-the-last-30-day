import React, { useState,useEffect,useContext } from 'react';
//import { useCallback } from 'react';

let date = new Date()
let newDate = new Date(date.setDate(date.getDate()-30))
let backdate="";
if((newDate.getMonth()+1)<10){
  backdate=newDate.getFullYear()+'-0'+(newDate.getMonth()+1)+'-'+newDate.getDate()
}else{
    backdate=newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate()
}
const  url=`https://api.github.com/search/repositories?q=created:>${backdate}&sort=stars&order=desc`;
const AppContext = React.createContext();
console.log(url);
const AppProvider = ({children}) => {
  const [githubdetails, setGithubdetails] = useState([]);
 
  const fetchItems = async () => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
     const { items } = data;
      console.log(data);
      if (items) {
        const newGitHub = items.map((item) => {
          const {
            id,
        owner,
            full_name,
             
            description,updated_at,issues_url,commits_url,contributors_url,statuses_url,stargazers_count,open_issues_count
          } = item;
          return {
            id:id,
            Name:full_name,
            profileavtar:owner,
            description:description,
            ownername:owner.login,
            noofissue:issues_url,
            updatedate:updated_at,
            noofstars:owner.starred_url,
            totalchanges:commits_url,
            contributor:contributors_url,
            statuses_url:statuses_url,
            stargazers_count:stargazers_count,
            open_issues_count:open_issues_count,

          };
        });

        setGithubdetails(newGitHub);
      }
    } catch (error) {}
  };

  useEffect(() => {
    
      fetchItems();
    },[]);
  return (
    <AppContext.Provider
    value={{ githubdetails }} >
    {children}
  </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };