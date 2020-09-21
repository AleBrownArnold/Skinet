using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(ProductSpecParams productSpecParams)
            : base(x => 
                (!productSpecParams.BrandId.HasValue || x.ProductBrandId == productSpecParams.BrandId) && (!productSpecParams.TypeId.HasValue || x.ProductTypeId == productSpecParams.TypeId))
        {
            AddIncludes(x => x.ProductBrand);
            AddIncludes(x => x.ProductType);
            AddOrderBy(x => x.Name);
            ApplyPaging(productSpecParams.PageSize * (productSpecParams.PageIndex - 1), productSpecParams.PageSize);

            if (!string.IsNullOrEmpty(productSpecParams.Sort))
            {
                switch (productSpecParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    
                    default:
                        AddOrderBy(p => p.Name);   
                        break;                 
                }
            }
        }

        public ProductsWithTypesAndBrandsSpecification(int productId) : base(x => x.Id == productId)
        {
            AddIncludes(x => x.ProductBrand);
            AddIncludes(x => x.ProductType);
        }
    }
}