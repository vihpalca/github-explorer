import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RepositoryItem } from "./RepositoyItem";
import '../styles/repositories.scss'
import { api } from '../services/api';

//https://api.github.com/users/vihpalca/repos

interface Repository {
  name: string,
  description: string,
  html_url: string,
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    axios.get('https://api.github.com/users/vihpalca/repos').then(response => setRepositories(response.data))
  }, [])
  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
      </ul>
    </section>
  )
}