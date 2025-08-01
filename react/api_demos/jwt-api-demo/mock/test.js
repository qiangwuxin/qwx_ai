export default [
  {
    url: '/api/todos', 
    method: 'get',
    response: () => {
      const todos = [
        {
          id: 1,
          title: 'todo1',
          completed: false,
        },
        {
          id: 2,
          title: 'todo2',
          completed: false,
        }
      ];
      return {
        code: 0,
        message: 'success',
        data: todos,
      };
    }
  },
  {
    url: '/repos',  
    method: 'get',
    response: () => {
      const repos = [
        {
          id: 5555555,
          title: '深度学习',
          description: '深度学习相关',
        },
        {
          id: 555555,
          title: '深度学习2',
          description: '深度学习相关2',
        }
      ];
      return repos;
    }
  }
];