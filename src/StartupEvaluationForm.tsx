import React from 'react';
import { QuillFormsProvider, Form, Question, QuestionTypes } from '@quillforms/react';
import '@quillforms/react/dist/quillforms.css';

const StartupEvaluationForm: React.FC = () => {
    const formObj = {
        blocks: [
            {
                id: 1,
                type: 'short-text',
                question: 'Qual é o seu nome?',
                required: true,
            },
            {
                id: 2,
                type: 'email',
                question: 'Qual é o seu email?',
                required: true,
            },
            {
                id: 3,
                type: 'short-text',
                question: 'Qual é o seu telefone?',
                required: true,
            },
            {
                id: 4,
                type: 'url',
                question: 'Qual seu LinkedIn?',
            },
            {
                id: 5,
                type: 'short-text',
                question: 'Qual é o nome da sua empresa?',
                required: true,
            },
            {
                id: 6,
                type: 'url',
                question: 'Qual é o site da sua empresa?',
            },
            {
                id: 7,
                type: 'short-text',
                question: 'Em qual estado brasileiro sua empresa está sediada?',
                required: true,
            },
            {
                id: 8,
                type: 'short-text',
                question: 'Em qual cidade sua empresa está sediada?',
                required: true,
            },
            {
                id: 9,
                type: 'long-text',
                question: 'Que tipo de negócio sua empresa realiza?',
                required: true,
            },
            {
                id: 10,
                type: 'long-text',
                question: 'Que tipo de produto sua empresa oferece?',
                required: true,
            },
            {
                id: 11,
                type: 'number',
                question: 'Quanto sua empresa já recebeu de capital de risco no total (em Reais)?',
                required: true,
            },
            {
                id: 12,
                type: 'number',
                question: 'Qual é o valuation atual da sua empresa (em Reais)?',
                required: true,
            },
            {
                id: 13,
                type: 'number',
                question: 'Quanto é sua receita mensal líquida atual (em Reais)?',
                required: true,
            },
            {
                id: 14,
                type: 'number',
                question: 'Quantos porcento dessa receita mensal é recorrente?',
                required: true,
            },
            {
                id: 15,
                type: 'number',
                question: 'Quanto foi sua receita líquida acumulada nos últimos 12 meses (em Reais)?',
                required: true,
            },
            {
                id: 16,
                type: 'number',
                question: 'Quantos sócios fundadores são full time, dedicando-se integralmente e somente à startup?',
                required: true,
            },
            {
                id: 17,
                type: 'number',
                question: 'Quanto é o equity dos founders, ou seja, quantos porcento da empresa ainda são de propriedade dos sócios fundadores?',
                required: true,
            },
            {
                id: 18,
                type: 'number',
                question: 'Há quantos anos completos sua empresa está em operação?',
                required: true,
            },
            {
                id: 19,
                type: 'number',
                question: 'Quantas pessoas trabalham na empresa hoje além dos sócios?',
                required: true,
            },
            {
                id: 20,
                type: 'number',
                question: 'Quantos clientes pagantes sua empresa tem hoje?',
                required: true,
            },
            {
                id: 21,
                type: 'long-text',
                question: 'Escreva um parágrafo curto e claro contendo sua proposta de valor e fonte de receita.',
                required: true,
            },
            {
                id: 22,
                type: 'url',
                question: 'Entre o link para seu pitch em PDF ou vídeo, vendendo a ideia e mostrando os diferenciais da sua empresa.',
            },
        ],
    };

    return (
        <QuillFormsProvider>
            <div style={{ width: "100%", height: "100vh" }}>
                <Form
                    formId={12345} // Use um número para o formId
                    formObj={formObj}
                />
            </div>
        </QuillFormsProvider>
    );
};

export default StartupEvaluationForm;
