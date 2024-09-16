let currentPage = 1;

const fetchHeadlines = async (page) => {
  const apiKey = "7776380563404e77b7a78ff57f50440c";
  const url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=50&page=${page}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);

    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Log the response data for debugging
    console.log(data);

    if (data.articles && data.articles.length > 0) {
      const item = data.articles[0]; // Get the first article
      const item1 = data.articles[1];
      const item2 = data.articles[2];
      // Check if the article has necessary data
      if (item.source.name) {
        // Update the element with id "article-1"
        document.getElementById("article-2").innerHTML = `
           <h3 class="miniPara">${item.title}</h3>
                 
                   <a href="${item.url}" class="anchorMargin">Click to Read</a>
                    <h6>${item.author}</h6>`;
        document.getElementById("article-3").innerHTML = `
           <h3 class="miniPara">${item1.title}</h3>
                 
                   <a href="${item1.url}" class="anchorMargin">Click to Read</a>
                    <h6>${item1.author}</h6>`;
        document.getElementById("article-4").innerHTML = `
                    <h3 class="miniPara">${item2.title}</h3>
                          
                            <a href="${item2.url}" class="anchorMargin">Click to Read</a>
                             <h6>${item2.author}</h6>`;
      } else {
        document.getElementById("article-2").innerHTML =
          "<p>Article data is missing or incomplete.</p>";
      }
    } else {
      document.getElementById("article-2").innerHTML =
        "<p>No articles found.</p>";
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    document.getElementById(
      "article-1"
    ).innerHTML = `<p>Error fetching news: ${error.message}</p>`;
  }
};

// Call the function to fetch the top headlines
fetchHeadlines(currentPage);

//adding data with image
let currentQuery = "india";
currentPage = 1;

const fetchSingleArticle = async (page, q) => {
  const apiKey = "7776380563404e77b7a78ff57f50440c";
  const url = `https://newsapi.org/v2/everything?q=${q}&from=2024-08-15&pageSize=20&page=${page}&sortBy=popularity&language=en&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data1 = await response.json();
    console.log(data1);
    if (data1.articles.length > 0) {
      let i = 4;
      const item = data1.articles[i + 1]; // Get the first (and only) article
      const item2 = data1.articles[i + 2];
      const item3 = data1.articles[i + 3];
      const item4 = data1.articles[i + 4];
      const item5 = data1.articles[i + 5];
      const item6 = data1.articles[i + 6];
      const item7 = data1.articles[i + 7];
      const item8 = data1.articles[i + 8];
      const item9 = data1.articles[i + 9];
      const item10 = data1.articles[i + 10];
      const item11 = data1.articles[i + 11];
      const item12 = data1.articles[i + 12];
      const item13 = data1.articles[i + 13];
      const item14 = data1.articles[i + 14];
      const item15 = data1.articles[i + 15];
      const item16 = data1.articles[i + 16];
      const item17 = data1.articles[i + 17];
      const item18 = data1.articles[i + 18];
      const item19 = data1.articles[i + 19];
      // Update only the element with id "article-1"
      document.getElementById("article-1").innerHTML = `
          <img src="${item.urlToImage}" alt="News Image" class="ox" />
          <h3>${item.source.name}</h3>
          <p style="height: 84px; width: 280px; margin-bottom: 10px" class="miniPara">
              ${item.description.slice(0, 250)}...
          </p>
          <a href="${item.url}" class="anchorMargin">Click to Read</a>`;
      document.querySelector(".ar-6").innerHTML = `
          
                <h4 class="src">${item2.source.name}</h4>
               <a href="${
                 item2.url
               }" class="handleAnchor" target="_blank"> <p class="miniPara">
                 ${item2.description.slice(0, 100)}...
                </p><a href="">
             
          `;
      document.querySelector(".ar-6img").innerHTML = `
          <img src="${item2.urlToImage}" alt="" class="minImage" />
          `;
      document.querySelector(".ar-7").innerHTML = `
          
          <h4 class="src">${item3.source.name}</h4>
         <a href="${
           item3.url
         }" class="handleAnchor" target="_blank"> <p class="miniPara">
           ${item3.description.slice(0, 100)}...
          </p><a href="">
       
    `;

      document.querySelector(".ar-7img").innerHTML = `
    <img src="${item3.urlToImage}" alt="" class="minImage" />
    `;

      document.querySelector(".ar-8").innerHTML = `
          
    <h4 class="src">${item4.source.name}</h4>
   <a href="${
     item4.url
   }" class="handleAnchor" target="_blank"> <p class="miniPara">
     ${item4.description.slice(0, 100)}...
    </p><a href="">
 
`;

      document.querySelector(".ar-8img").innerHTML = `
<img src="${item4.urlToImage}" alt="" class="minImage" />
`;

      document.querySelector(".ar-9").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item4.title}</h4>
       <a href=${
         item4.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item4.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item4.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-10").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item5.title}</h4>
       <a href=${
         item5.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item5.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item5.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-11").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item6.title}</h4>
       <a href=${
         item6.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item6.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item6.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-12").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item7.title}</h4>
       <a href=${
         item7.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item7.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item7.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-13").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item8.title}</h4>
       <a href=${
         item8.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item4.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item8.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-14").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item9.title}</h4>
       <a href=${
         item9.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item9.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item9.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-15").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item10.title}</h4>
       <a href=${
         item10.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item10.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item10.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-16").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item11.title}</h4>
       <a href=${
         item11.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item11.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item11.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-17").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item12.title}</h4>
       <a href=${
         item12.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item12.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item12.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-18").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item13.title}</h4>
       <a href=${
         item13.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item13.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item13.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-19").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item14.title}</h4>
       <a href=${
         item14.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item14.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item14.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-20").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item15.title}</h4>
       <a href=${
         item15.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item15.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item15.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-21").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item16.title}</h4>
       <a href=${
         item16.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item16.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item16.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-22").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item17.title}</h4>
       <a href=${
         item17.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item17.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item17.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-23").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item18.title}</h4>
       <a href=${
         item18.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item18.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item18.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-24").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item19.title}</h4>
       <a href=${
         item19.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item19.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item19.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-25").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item20.title}</h4>
       <a href=${
         item20.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item4.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item20.urlToImage}" alt="" class="minImage ar-9img" />

`;
      document.querySelector(".ar-26").innerHTML = `
          
<div class="flexCol">
        <h4 class="src">${item21.title}</h4>
       <a href=${
         item21.url
       } class="handleAnchor" target="_blank"> <p class="miniPara">
        ${item21.description.slice(0, 100)}...
        </p></a>
      </div>
      <img src="${item21.urlToImage}" alt="" class="minImage ar-9img" />

`;

      //yha see ar-15 se ar-26 tk copy kr rha hu
    } else {
      document.getElementById("article-1").innerHTML =
        "<p>No articles found.</p>";
    }
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

// Call the function to fetch a single article
fetchSingleArticle(currentPage, currentQuery);

//logic to add news to lower elements

document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  const query = document.getElementById("searchInput").value;
  currentQuery = query;
  fetchSingleArticle(1, currentQuery);
});
