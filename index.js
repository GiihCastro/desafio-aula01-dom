 document.getElementById('salaryForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

      var per_hour = parseFloat(document.getElementById('perHour').value);
      var work_hour = parseFloat(document.getElementById('workHours').value);

      var gross_pay = per_hour * work_hour;

      if (isNaN(gross_pay) || gross_pay < 0) {
        document.getElementById('resultParagraph').textContent = "Por favor, insira valores válidos.";
      } else {
        var IRdiscount = gross_pay * 0.11;
        var INSSdiscount = gross_pay * 0.08;
        var Sindicatodiscount = gross_pay * 0.05;

        var net_pay = gross_pay - IRdiscount - INSSdiscount - Sindicatodiscount;

        var resultText = `Seu salário bruto é R$${gross_pay.toFixed(2)}.<br>`;
        resultText += `Você pagou um total de R$${INSSdiscount.toFixed(2)} ao INSS.<br>`;
        resultText += `Você pagou um total de R$${Sindicatodiscount.toFixed(2)} ao Sindicato.<br>`;
        resultText += `Seu valor total de descontos é R$${(IRdiscount + INSSdiscount + Sindicatodiscount).toFixed(2)}.<br>`;
        resultText += `Seu salário líquido é R$${net_pay.toFixed(2)}.`;

        document.getElementById('resultParagraph').innerHTML = resultText;
      }
    });