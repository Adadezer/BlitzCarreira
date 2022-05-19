import { Request, Response, NextFunction } from 'express';

export default function validationTask(req: Request, res: Response, next: NextFunction) {
  const { descricao, status } = req.body;

  if (!descricao) {
    return res.status(404).json({ message: 'Preencha o campo descrição' });
  }

  if (!status) {
    return res.status(404).json({ message: 'Preencha o campo status' });
  }

  if (status !== 'Pendente' || status !== 'Concluido' || status !== 'Em Andamento') {
    return res.status(404).json({ message: 'status não aceito' });
  }
  
  next();
}