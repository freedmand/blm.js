window.addEventListener('load', function () {
  var currentFilter = document.body.style.filter || '';
  document.body.style.filter = currentFilter + ' grayscale(100%)';

  var footer = document.createElement('div');
  var table = document.createElement('table');
  var lcell = document.createElement('td');
  var rcell = document.createElement('td');

  footer.style.background = 'black';
  footer.style.color = 'white';
  footer.style.position = 'sticky';
  footer.style.bottom = '0';
  footer.style.left = '0';
  footer.style.right = '0';
  footer.style.padding = '20px';
  footer.style.fontSize = '20px';
  footer.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif';
  footer.style.boxShadow = '0 0 4px rgba(0, 0, 0, 0.25)';
  table.width = '100%';
  var linkColor = 'rgb(247, 47, 0)';

  var linkBlm = document.createElement('a');
  linkBlm.href = 'https://blacklivesmatter.com/';
  linkBlm.target = '_blank';
  linkBlm.rel = 'noopener noreferrer';
  linkBlm.textContent = 'Black lives matter';
  linkBlm.style.color = linkColor;

  var linkCampaignZero = document.createElement('a');
  linkCampaignZero.href = 'https://www.joincampaignzero.org/';
  linkCampaignZero.target = '_blank';
  linkCampaignZero.rel = 'noopener noreferrer';
  linkCampaignZero.textContent = 'Campaign Zero';
  linkCampaignZero.style.color = linkColor;

  var linkEqualJusticeInitiative = document.createElement('a');
  linkEqualJusticeInitiative.href = 'https://support.eji.org/give/153413/#!/donation/checkout';
  linkEqualJusticeInitiative.target = '_blank';
  linkEqualJusticeInitiative.rel = 'noopener noreferrer';
  linkEqualJusticeInitiative.textContent = 'Equal Justice Initiative';
  linkEqualJusticeInitiative.style.color = linkColor;

  var linkLocalBailFunds = document.createElement('a');
  linkLocalBailFunds.href = 'https://bailfunds.github.io/';
  linkLocalBailFunds.target = '_blank';
  linkLocalBailFunds.rel = 'noopener noreferrer';
  linkLocalBailFunds.textContent = 'local bail funds';
  linkLocalBailFunds.style.color = linkColor;

  var text = document.createElement('span');
  text.style.display = 'inline-block';
  text.style.padding = '5px';
  text.appendChild(linkBlm);
  text.appendChild(document.createTextNode('. Support '));
  text.appendChild(linkCampaignZero);
  text.appendChild(document.createTextNode(', the '));
  text.appendChild(linkEqualJusticeInitiative);
  text.appendChild(document.createTextNode(', and '));
  text.appendChild(linkLocalBailFunds);
  text.appendChild(document.createTextNode('.'));

  lcell.appendChild(text);
  rcell.style.textAlign = 'right';
  var close = document.createElement('span');
  close.textContent = '×';
  close.style.padding = '5px';
  close.style.userSelect = 'none';
  close.style.cursor = 'pointer';
  close.onclick = function () {
    footer.remove();
    document.body.style.filter = currentFilter;
  };
  rcell.appendChild(close);
  footer.appendChild(table);
  table.appendChild(lcell);
  table.appendChild(rcell);

  document.documentElement.appendChild(footer);
});
