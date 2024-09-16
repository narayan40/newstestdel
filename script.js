let currentPage = 1;

const fetchHeadlines = async (page) => {
  const apiKey = "7776380563404e77b7a78ff57f50440c";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);

    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Log the response data for debugging
    console.log("data");
    console.log(data);

    if (data.articles && data.articles.length > 0) {
      const item = data.articles[0]; // Get the first article
      const item1 = data.articles[1];
      const item2 = data.articles[2];
      // Check if the article has necessary data
      if (item.source.name) {
        // Update the element with id "article-1"
        document.getElementById("article-2").innerHTML = `
           <p class="miniPara">${item.title}</p>
                 
                   <a href="${item.url}" class="anchorMargin">Click to Read</a>
                    <h6 class="h6">${item.author}</h6>`;
        document.getElementById("article-3").innerHTML = `
           <p class="miniPara">${item1.title}</p>
                 
                   <a href="${item1.url}" class="anchorMargin">Click to Read</a>
                    <h6>${item1.author}</h6>`;
        document.getElementById("article-4").innerHTML = `
                    <p class="miniPara">${item1.title}</p>
                          
                            <a href="${item1.url}" class="anchorMargin">Click to Read</a>
                             <h6>${item1.author}</h6>`;
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
  const url = `https://newsapi.org/v2/everything?q=${q}&from=2024-09-1&pageSize=20&page=${page}&sortBy=popularity&language=en&apiKey=${apiKey}`;

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
      // Update only the element with id "article-1"
      document.getElementById("article-1").innerHTML = `
          <img src="${item.urlToImage}" alt="News Image" class="ox" />
          <h3>${item.source.name}</h3>
          <p style="height: 84px; width: 280px; margin-bottom: 120px" class="miniPara para bigTxt">
              ${item.description.slice(0, 350)}...
          </p>
          <a href="${item.url}" class="anchorMargin" style="margin-top:10px">Click to Read</a>
          
          `;
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

const fetchNews = async (page, q) => {
  const apiKey = "276319ef442b4a47878f033d315c36e4";
  const url = `https://newsapi.org/v2/everything?q=${q}&from=2024-09-10&pageSize=18&page=${page}&sortBy=popularity&language=en&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    let str = "";

    // Loop through articles and construct HTML for each article
    data.articles.forEach((item) => {
      if (item.urlToImage && item.title && item.description) {
        str += `
          <div class="flexCol">
            <h4 class="src">${item.title}</h4>
            <p class="miniPara">
              ${item.description.slice(0, 150)}...
            </p>
            <img src="${
              item.urlToImage
            }" alt="News Image" class="minImage img2 ar-9img" />
            <a href="${
              item.url
            }" class="anchorMargin" target="_blank" rel="noopener noreferrer">Click to Read</a>
          </div>
        `;
      }
    });

    // Insert the constructed HTML into the content container
    document.querySelector(".content").innerHTML = str;
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

// Fetch news when the page loads

fetchNews(currentPage, currentQuery);
document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  const query = document.getElementById("searchInput").value;
  currentQuery = query;
  fetchNews(currentPage, currentQuery);
});
document.getElementById("searchInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Check if the key pressed is "Enter"
    e.preventDefault();
    const query = document.getElementById("searchInput").value;
    currentQuery = query;
    fetchNews(currentPage, currentQuery);
  }
});
document.getElementById("India").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  const query = "india";
  currentQuery = query;
  fetchNews(currentPage, currentQuery);
});
// Add a click event listener to the <td> element with ID "World"
document.getElementById("World").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default action

  // Fetch news with the query "world"
  currentQuery = "world"; // Set the current query to "world"
  fetchNews(currentPage, currentQuery); // Call the fetchNews function with the updated query
});
// Add a click event listener to the <td> element with ID "World"
document.getElementById("Local").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default action

  // Fetch news with the query "world"
  currentQuery = "uttar pradesh"; // Set the current query to "world"
  fetchNews(currentPage, currentQuery); // Call the fetchNews function with the updated query
});
document.getElementById("Business").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default action

  // Fetch news with the query "world"
  currentQuery = "business"; // Set the current query to "world"
  fetchNews(currentPage, currentQuery); // Call the fetchNews function with the updated query
});
document.getElementById("Business").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default action

  // Fetch news with the query "world"
  currentQuery = "business"; // Set the current query to "world"
  fetchNews(currentPage, currentQuery); // Call the fetchNews function with the updated query
});
document.getElementById("Technology").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default action

  // Fetch news with the query "world"
  currentQuery = "technology"; // Set the current query to "world"
  fetchNews(currentPage, currentQuery); // Call the fetchNews function with the updated query
});
document.getElementById("Entertainment").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default action

  // Fetch news with the query "world"
  currentQuery = "entertainment"; // Set the current query to "world"
  fetchNews(currentPage, currentQuery); // Call the fetchNews function with the updated query
});
document.getElementById("Sports").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default action

  // Fetch news with the query "world"
  currentQuery = "sports"; // Set the current query to "world"
  fetchNews(currentPage, currentQuery); // Call the fetchNews function with the updated query
});
document.getElementById("Science").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default action

  // Fetch news with the query "world"
  currentQuery = "science"; // Set the current query to "world"
  fetchNews(currentPage, currentQuery); // Call the fetchNews function with the updated query
});
document.getElementById("Health").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default action

  // Fetch news with the query "world"
  currentQuery = "health"; // Set the current query to "world"
  fetchNews(currentPage, currentQuery); // Call the fetchNews function with the updated query
});
document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchNews(currentPage, currentQuery);
  }
});
document.getElementById("next").addEventListener("click", () => {
  currentPage++;
  fetchNews(currentPage, currentQuery);
});


/*below navbar date time logic*/  
function updateTime() {
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  const now = new Date();

  // Format the time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Format the date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);

  // Update the time and date elements
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = formattedDate;
}

// Initial call and then update every second
updateTime();
setInterval(updateTime, 1000);
