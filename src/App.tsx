import { PlusCircle } from 'lucide-react'
import styles from './App.module.css'
import logo from './assets/logo.svg'
import { Empty } from './components/Empty'
import './global.css'


function App() {
  return (
    <>
      <div className={styles.wrapper}>      
        <header className={styles.header}>
          <img src={logo}/>
        </header>

        <div className={styles.inputContainer}>
          <form>
            <input type="text" placeholder='Adicione uma nova tarefa'>
              
            </input>

            <button>
              Criar
              <PlusCircle />
            </button>

          </form>
        </div>

        <main className={styles.mainContainer}>
          <header>
            <div className={styles.tasksCreated}>
              <span> Tarefas Criadas </span>              
              <span> 0 </span>              
            </div>

            <div className={styles.tasksFinished}>
              <span> Concluídas </span>
              <span> 2 de 5 </span>
            </div>
          </header>

          <div />

          <body>
            <Empty />

            {/* <div>
              <input type="radio" name="" id="" />

              <span> 
                In sint aliqua velit mollit in cupidatat est adipisicing duis non amet duis ut. 
                Officia ut sint sunt enim minim. Minim quis velit aliqua non qui velit consectetur 
              </span>

              <Trash2 />
            </div> */}
          </body>
        </main>
      </div>
    </>
  )
}

export default App
