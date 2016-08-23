UPDATE [dbo].[GoodNews]
    SET 
          [Name(s)] = @name
        , [Good News] = @news
        , [Date] = @date
        , [isDeleted] = @isdeleted
WHERE ID = @id;