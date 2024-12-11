document.addEventListener('DOMContentLoaded', () => {
    const displayCountSelect = document.getElementById('displayCount');
    const downloadList = document.getElementById('downloadList');

    function updateDownloadList(count) {
        browser.storage.local.get({ downloads: [] }).then(result => {
            let downloads = result.downloads.slice(0, count === 'all' ? undefined : count);
            downloadList.innerHTML = '';
            downloads.forEach(download => {
                let li = document.createElement('li');
                li.textContent = `${download.filename} (${new Date(download.startTime).toLocaleString()})`;
                downloadList.appendChild(li);
            });
        });
    }

    displayCountSelect.addEventListener('change', () => {
        updateDownloadList(displayCountSelect.value);
    });

    updateDownloadList(displayCountSelect.value);
});