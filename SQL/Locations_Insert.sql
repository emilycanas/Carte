USE [Carte]
GO
/****** Object:  StoredProcedure [dbo].[Locations_Insert]    Script Date: 9/25/2022 7:49:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- =============================================
-- Author:		<Emily Canas>
-- Create date: <08/25/2022>
-- Description:	<Insert Proc for the Location Table>
-- Code Reviewer: Jeremiah Omolo


-- MODIFIED BY: 
-- MODIFIED DATE:
-- Code Reviewer: 
-- Note: 
-- =============================================
ALTER proc [dbo].[Locations_Insert]
			@LocationTypeId int 
			,@LineOne nvarchar(255)
			,@LineTwo nvarchar(255) = Null
			,@City nvarchar(255)
			,@Zip nvarchar(50) = Null
			,@StateId int
			,@Latitude float
			,@Longitude float
			,@CreatedBy int
			,@ModifiedBy int
			,@Id int OUTPUT
/*
	DECLARE @Id int = 0

	DECLARE @LocationTypeId int = 1
			,@LineOne nvarchar(255) = '4567 Somewhere'
			,@LineTwo nvarchar(255) = null
			,@City nvarchar(255) = 'MidCity'
			,@Zip nvarchar(50) = '90210'
			,@StateId int = 12
			,@Latitude float = 43.24
			,@Longitude float = 25.1
			,@CreatedBy int = 1
			,@ModifiedBy int = NULL

	EXECUTE [dbo].[Locations_Insert]
			@LocationTypeId
			,@LineOne
			,@LineTwo 
			,@City
			,@Zip
			,@StateId 
			,@Latitude 
			,@Longitude 
			,@CreatedBy 
			,@ModifiedBy
			,@Id OUTPUT


	SELECT  @Id
	SELECT * FROM
	dbo.Locations
	WHERE Id = @Id
*/

AS 

BEGIN

	INSERT INTO [dbo].[Locations]
			   ([LocationTypeId]
			   ,[LineOne]
			   ,[LineTwo]
			   ,[City]
			   ,[Zip]
			   ,[StateId]
			   ,[Latitude]
			   ,[Longitude]
			   ,[CreatedBy]
			   ,[ModifiedBy])
		 VALUES
			   (@LocationTypeId
				,@LineOne
				,@LineTwo 
				,@City
				,@Zip
				,@StateId 
				,@Latitude 
				,@Longitude 
				,@CreatedBy 
				,@ModifiedBy)
		SET @Id = SCOPE_IDENTITY()
END
