    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
                const index = [...entry.target.parentElement.children].indexOf(entry.target)
                setTimeout(() => {
                    entry.target.classList.add('show-left')
                }, index * 50)
          observer.unobserve(entry.target)
        }
      })
    })


export default observer;