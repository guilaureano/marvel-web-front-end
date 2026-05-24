import Grid from '@material-ui/core/Grid'
import React, {useState, useEffect} from 'react';

import Card from '../../components/Card';
import LimitSelector from '../../components/LimitSelector';
import Loading from '../../components/Loading';
import PageHeader from '../../components/PageHeader';
import {loadCharaterByName, loadCharaters} from '../../services/actions';
import {Form, Pagination, Wrap} from './styles'

const Dashboard = () => {
  const pageTitle = 'Explore os personagens Marvel';
  const valuesLimit = [10, 20, 40, 80];
  const [characters, setCharacters] = useState([]);
  const [inputError, setInputError] = useState('');
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [newCharater, setNewCharater] = useState('');
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [info, setInfo] = useState({
    copyright: '© 2020 MARVEL',
    textFooter: 'Data provided by Marvel. © 2020 MARVEL',
    total: 0,
    totalResult: ''
  });

  const handleResponse = response => {
    setInfo({
      copyright: response.data.copyright,
      total: response.data.data.total,
      totalResult: `Total de personagens encontrados: ${response.data.data.total}.`,
      textFooter: response.data.attributionText,
    });
    setCharacters(response.data.data.results);
    setLoading(false);
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const newOffset = page === 0 ? 0 : (limit * page) -1;
      setOffset(newOffset);
      const response = await loadCharaters(limit, newOffset);
      handleResponse(response);
    }
    loadData();
  },[limit, offset, page]);

  async function handleListCharater(event){
    event.preventDefault();
    if (!newCharater) {
      setInputError('Digite o nome do personagem');
      return;
    }
    try {
      const response = await loadCharaterByName(newCharater);
      handleResponse(response);
      setNewCharater('')
      setInputError('');
    } catch (err) {
      setInputError(`Erro na busca pelo personagem: ${newCharater}`);
    }
  };

  const handleLeft = () => {
    setPage(page - 1);
  }

  const handleRight = () => {
    setPage(page + 1);
  }

  const renderCharacters = () => {
    if (loading) {
      return <Loading loading={loading}/>;
    }
    const totalItems = info.total > limit;
    return (
      <>
        <Grid container justify="flex-start" spacing={4}>
          {characters.map(character => <Card {...character} key={character.id}/>)}
        </Grid>
        {totalItems &&
          <Pagination>
            <div>
              {page > 0 && <button onClick={handleLeft}>Anterior</button>}
            </div>
            <div>
              <button onClick={handleRight}>Próxima</button>
            </div>
          </Pagination>
        }
      </>
    );
  };

  return (
      <>
        <PageHeader
          imgAlt={info.copyright}
          title={pageTitle}
        >
          {inputError && <h6>{inputError}</h6>}
          <Form onSubmit={handleListCharater} >
            <input
              onChange={e => setNewCharater(e.target.value)}
              placeholder='Digite o nome do personagem em inglês'
              value={newCharater}
            />
            <button type='submit'>Pesquisar</button>
          </Form>
          <LimitSelector
            defaultValue={limit}
            onChange={setLimit}
            total={info.totalResult}
            values={valuesLimit}
          />
        </PageHeader>
        <Wrap>
          {renderCharacters()}
        </Wrap>
        <footer>
          <div id='copy'>{info.textFooter}</div>
        </footer>
      </>
  );
}

export default Dashboard;
