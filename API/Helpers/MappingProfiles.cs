using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(p => p.ProductBrand, opt => opt
                .MapFrom(src => src.ProductBrand.Name))
                .ForMember(p => p.ProductType, opt => opt
                .MapFrom(src => src.ProductType.Name))
                .ForMember(p => p.PictureUrl, opt => opt
                .MapFrom<ProductUrlResolver>());
        }
    }
}