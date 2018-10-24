const  typeDefs = `
    type Book {
        age_group:String
        author:String
        contributor:String
        contributor_note:String
        description:String
        isbns:[Isbn]
        price:Int
        publisher:String
        ranks_history:[Rank]
        reviews:[Review]
        title:String
    }
    
    type Isbn {
        isbn10:String
        isbn13:String
    }
    
    type Rank {
        asterisk:Int
        bestsellers_date:String
        dagger:Int
        display_name:String
        list_name:String
        primary_isbn10:String
        primary_isbn13:String
        published_date:String
        rank:Int
        weeks_on_list:Int
    }
    
    type Review {
        article_chapter_link:String
        book_review_link:String
        first_chapter_link:String
        sunday_review_link:String
    }
    
    input QueryContext {
        cursorMark: String
        pageSize: Int
    }
    
    type BooksPage {
        totalRows: Int
        pageSize: Int
        cursorMark: String
        results: [Book]
    }
    
    type Query {
        listBestSeller(queryContext: QueryContext!): BooksPage
    }
`;

export default typeDefs;