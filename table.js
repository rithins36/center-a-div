function loadScoresGSheet() {

    let sheetUrl = "https://docs.google.com/spreadsheets/d/17fcQXU2jf9_JGFrm5sT-OWOMqq3izTWWH7aTbGKay_0/edit#gid=0";
  
    $('#scores').sheetrock(
      {
        url: sheetUrl,
        query: `SELECT A, B `,
        labels: ["NAME", "POINTS"],
        callback: () => {},
      }
    );
  };
  
  
  $(document).ready(loadScoresGSheet);

  // https://docs.google.com/spreadsheets/d/1IBrHZ5zt5EP9TILd-YTCbHVipz6A8dnXheZsF_VcmVc/edit#gid=0