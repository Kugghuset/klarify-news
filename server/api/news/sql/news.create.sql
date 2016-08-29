INSERT INTO [dbo].[GoodNews]
    (
          [Name(s)]
        , [Good News]
        , [Date]
    )
OUTPUT Inserted.[Name(s)], Inserted.[Good News], Inserted.[Date], Inserted.[ID], Inserted.[isDeleted]
VALUES
    (
          @names
        , @news
        , @date
    )