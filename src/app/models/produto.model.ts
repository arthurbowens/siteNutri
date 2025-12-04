export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: CategoriaProduto;
  disponivel: boolean;
}

export enum CategoriaProduto {
  SUPLEMENTOS = 'suplementos',
  DIETAS_ENTERAIS = 'dietas-enterais',
  MODA_FITNESS = 'moda-fitness'
}

export interface Categoria {
  id: CategoriaProduto;
  nome: string;
  descricao: string;
  icone: string;
}

