import styles from './Content.module.css'

export function Content() {
  return (
    <div className={styles.benefits}>
      <div className={styles.wrapper}>
        <span>
          1
        </span>

        <h2>
          Actionable insights
        </h2>

        <p>
          Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.
        </p>
      </div>

      <div className={styles.wrapper}>
        <span>
          2
        </span>

        <h2>
          Data-driven decisions
        </h2>

        <p>
          Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.
        </p>
      </div>

      <div className={styles.wrapper}>
        <span>
          3
        </span>

        <h2>
          Always affordable
        </h2>

        <p>
          Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.
        </p>
      </div>
    </div>
  )
}