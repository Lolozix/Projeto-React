import { useParams } from 'react-router-dom';
import Card "../componentes/Card";

export default function Detalhe() {

  const { id } = useParams();
  const lita = JSON.parse(localStorage.Item("Lista"));

  const atividade = lista.filter( (objeto) =>)
  if(objeto.id == id){
    return objeto;
  }