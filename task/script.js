const addBtn = document.getElementById('addBtn');
    const progressContainer = document.getElementById('progressContainer');

    // Add event listener to button
    addBtn.addEventListener('click', () => {
      // Create progress wrapper div
      const wrapper = document.createElement('div');
      wrapper.classList.add('progress-wrapper');

      // Create progress bar div
      const bar = document.createElement('div');
      bar.classList.add('progress-bar');

      // Append bar to wrapper, then wrapper to container
      wrapper.appendChild(bar);
      progressContainer.appendChild(wrapper);

      // Animate after short delay
      setTimeout(() => {
        bar.style.width = '100%';
      }, 50);
    });