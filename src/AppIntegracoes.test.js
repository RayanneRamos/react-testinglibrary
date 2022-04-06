import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import api from './api/index';

jest.mock('./api');

describe('Requisição para API', () => {
  it('Exibir lista de transações através da API', async () => {
   api.listaTransacoes.mockResolvedValue([
     {
      'valor': '10',
      'transacao': 'saque',
      'data': '10/08/2020',
      'id': 1
     },
     {
      'transacao': 'deposito',
      'valor': '20',
      'data': '26/09/2020',
      'id': 2
     },
   ]);

   render(<App />);

   expect(await screen.findByText('saque')).toBeInTheDocument();
   expect(screen.getByTestId('transacoes').children.length).toBe(2);
  })
})