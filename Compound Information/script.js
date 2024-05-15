function getCompoundInfo(event) {
    event.preventDefault(); // Prevent form submission
    const compoundName = document.getElementById('compoundInput').value.trim();
    if (!compoundName) {
        document.getElementById('output').innerHTML = "Please enter a compound name.";
        return;
    }
    fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${compoundName}/JSON`)
        .then(response => response.json())
        .then(data => {
                if (data.PC_Compounds && data.PC_Compounds.length > 0) {
                    const compound = data.PC_Compounds[0];
                    const properties = compound.props || [];
                    // Display the compound information
                    document.getElementById('output').innerHTML = `
                    <p><strong>Chemical Formula:</strong> ${formatChemicalFormula(properties.find(prop => prop.urn.label === 'Molecular Formula')?.value.sval || 'N/A')}</p>
                    <p><strong>IUPAC Names:</strong> 
                    <ul>
                        ${properties
                            .filter(prop => prop.urn.label === 'IUPAC Name')
                            .map(prop => `<li>${prop.value.sval} (${prop.urn.name})</li>`)
                            .join('')}
                    </ul>
                    </p>
                    <p><strong>Weight (MonoIsotopic):</strong> ${properties.find(prop => prop.urn.label === 'Weight' && prop.urn.name === 'MonoIsotopic').value.sval}</p>
                    <p><strong>Mass (Exact):</strong> ${properties.find(prop => prop.urn.label === 'Mass' && prop.urn.name === 'Exact')?.value.sval || 'N/A'}</p>
                    <p><strong>Molecular Weight:</strong> ${properties.find(prop => prop.urn.label === 'Molecular Weight')?.value.sval || 'N/A'}</p>
                    <p><strong>Log P:</strong> ${properties.find(prop => prop.urn.label === 'Log P')?.value.fval || 'N/A'}</p>
                    <p><strong>SMILES (Canonical):</strong> ${properties.find(prop => prop.urn.label === 'SMILES' && prop.urn.name === 'Canonical')?.value.sval || 'N/A'}</p>
                    <p><strong>InChI (Standard):</strong> ${properties.find(prop => prop.urn.label === 'InChI' && prop.urn.name === 'Standard')?.value.sval || 'N/A'}</p>
                    <p><strong>InChIKey (Standard):</strong> ${properties.find(prop => prop.urn.label === 'InChIKey' && prop.urn.name === 'Standard')?.value.sval || 'N/A'}</p>
                    <p><strong>Topological Polar Surface Area:</strong> ${properties.find(prop => prop.urn.label === 'Topological' && prop.urn.name === 'Polar Surface Area').value.fval}</p>
                    <img src="${getImageUrl(compound.id.id.cid)}" alt="Compound Structure" style="max-width: 400px;">
                `;
            } else {
                document.getElementById('output').innerHTML = 'Compound not found.';
            }
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching compound info:', error);
            document.getElementById('output').innerHTML = 'An error occurred. Please try again later.';
        });
}

function formatChemicalFormula(formula) {
    // Wrap numbers in <sub> tags
    return formula.replace(/(\d+)/g, '<sub>$1</sub>');
}

function getImageUrl(cid) {
    return `https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${cid}&t=l`;
}