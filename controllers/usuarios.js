const db = require('../database/connection');

module.exports = {

    async ListarUsuario(request, response){
        try{
            //throw new Error('Eu causei o erro!');
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Usuarios',
                dados: null
            });
        } catch (error){
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Requisição',
                dados: error.message
            });
        }
    }
    async ListarUsuario(request, response){
        try{
            //throw new Error('Eu causei o erro!');
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Usuarios',
                dados: null
            });
        } catch (error){
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Requisição',
                dados: error.message
            });
        }
    }
    async ListarUsuario(request, response){
        try{
            //throw new Error('Eu causei o erro!');
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Usuarios',
                dados: null
            });
        } catch (error){
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Requisição',
                dados: error.message
            });
        }
    }
    async ListarUsuario(request, response){
        try{
            //throw new Error('Eu causei o erro!');
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Usuarios',
                dados: null
            });
        } catch (error){
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Requisição',
                dados: error.message
            });
        }
    }
    async ListarUsuario(request, response){
        try{
            //throw new Error('Eu causei o erro!');
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Usuarios',
                dados: null
            });
        } catch (error){
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Requisição',
                dados: error.message
            });
        }
    }
}

