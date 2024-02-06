const { gql } = require("apollo-server");

module.exports = gql`
  type Recipe {
    name: String
    description: String
    createdAt: String
    thumbsUp: Int
    thumbsDown: Int
  }
  input RecipeInput {
    name: String
    description: String
  }

  input EditRecipeInput {
    name: String
  }

  type Query {
    recipe(ID: ID!): Recipe!
    getRecipes(amount: Int): [Recipe]
  }

  type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, editrecipeInput: EditRecipeInput): Boolean
  }
  type Subscription {
    newRecipe: Recipe!
  }
`;
