<script>
    fetch('graph-data.json')
        .then(response => response.json())
        .then(data => {
            var cy = cytoscape({
                container: document.getElementById('cy'),
                elements: data.elements,
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#0074D9',
                            'label': 'data(label)'
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 2,
                            'line-color': '#B10DC9',
                            'target-arrow-color': '#B10DC9',
                            'target-arrow-shape': 'triangle',
                            'label': 'data(label)'
                        }
                    }
                ],
                layout: {
                    name: 'cose'
                }
            });
        });
</script>
