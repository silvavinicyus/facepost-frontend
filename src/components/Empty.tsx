import { ClipboardListIcon } from 'lucide-react'
import styles from './Empty.module.css'

export function Empty() {
  return (
    <main className={styles.content}>      

      <ClipboardListIcon />

      <article>
        <p>
          Você ainda não tem tarefas cadastradas
        </p>

        <p>
          Crie tarefas e organize seus itens a fazer
        </p>
      </article>
    </main>
  )
}